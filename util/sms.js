// aws sdk 호출 및 설정
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const sns = new AWS.SNS();

// random 숫자 생성
const random = require("./random");

var us_phone_number = null;

module.exports = {
    set_us_phone_number: (us_phone_number) => {
        this.us_phone_number = us_phone_number;
    },
    send_sms: () => {
        console.log("+82" + this.us_phone_number)
        let random_number = random.number(1000,9999);
        
        sns.publish({
            Message: String(random_number),
            Subject: "SMOL",
            PhoneNumber: "+82" + this.us_phone_number
        }, (err, result) => {
            if(err)
                console.log(err);
            else
                console.log(result);
        })
        return random_number;
        
        
        
        
        
    }
}