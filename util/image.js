// modules
const request = require('request').defaults({ encoding: null });
var AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region : 'ap-northeast-2'
});

var base64 = null;

module.exports = {
    set_base64: async (uri) => {
        base64 = await new Promise((resolve, reject) => {
            request.get(uri, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    let data = "data:" + res.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                    resolve(data);
                } else {
                    return reject(err);
                }
            })
        })
    },
    s3_upload: () => {
        let buffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""),'base64')
        let param = {
            'Bucket': process.env.AWS_S3_BUCKET,
            'Key': 'image/' + 'logo3.png',
            'ACL': 'public-read',
            'Body': buffer,
            'ContentEncoding': 'base64',
            'ContentType': 'image/jpeg'
        }
        s3.upload(param, function(err, data){
            if(err) {
                console.log(err);
            }
            console.log(data);
        });
    }
}