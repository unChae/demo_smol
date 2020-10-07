const sms = require("../../util/sms");

const model = require('../../models');
const User = model.User;

const response = require("../../util/response");

module.exports = async (req, res) => {
    let {us_phone_number} = req.body;
    
    let user = await User.findOne({
            raw : true,
            where : {us_phone_number}
        });
    
    if (user){
        
        response(res,409,"[login] 이미 등록된 사용자",null);
    }
    
    else{
        //console.log(req.session.number);
        //if(req.session.number) {
        //    req.session.number ++;
        //} else {
        //    req.session.number = 1;
        //}
        
        //console.log(req.session.number);
        //response(res,200,"test",null);
        
        sms.set_us_phone_number(us_phone_number);
        var number = sms.send_sms();
        
        req.session.number=number;
        console.log(req.session)
        
        response(res,200,"[login] 인증번호 발송",null);
    }
    
};
    