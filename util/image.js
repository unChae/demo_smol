// modules
const request = require('request').defaults({ encoding: null });
var AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region : 'ap-northeast-2'
});

module.exports = {
    get_base64: async (uri) => {
        return await new Promise((resolve, reject) => {
            request.get(uri, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                    resolve(data);
                } else {
                    return reject(err);
                }
            })
        })
    },
    s3_upload: (base64) => {
        console.log(base64);
        buf = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""),'base64')
        var param = {
            'Bucket': process.env.AWS_S3_BUCKET,
            'Key': 'image/' + 'logo.png',
            'ACL': 'public-read',
            'Body': buf,
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