const response = require("../../util/response");

module.exports = async (req,res) => {
    
    let {number}=req.body;
    
    console.log('number : ', number);
    console.log('session number :', req.session.number);
    
    if (req.session.number) {
        
        if (number==req.session.number){
            response(res, 200, "[login] 인증 완료 ", null);
        }
        else{
            response(res, 409, "[login] 인증번호 error ", null);
        }
    }
    else {
        
        response(res, 409, "[login] 인증번호 만료 ", null);
    }
};
