// models
const model = require('../../models');
const User = model.User;

// utils
const response = require("../../util/response");
const sms = require("../../util/sms");

module.exports = async (req, res) => {
    let {us_phone_number} = req.body;
    
    let user = await User.findOne({
        raw: true,
        where: {us_phone_number}
    })
    .catch((err) => {
        console.log(err);
        response(res, 409, "[certification] 데이터베이스 오류 발생.", null);
    })

    if (user){
        response(res, 409, "[certification] 이미 등록된 사용자.", null);
    }else{
        sms.set_us_phone_number(us_phone_number);
        sms.send_sms();
        let number = sms.get_number();

        req.session.number=number;
        
        response(res, 200, "[certification] 인증번호 발송.", null);
    }
    
};
    