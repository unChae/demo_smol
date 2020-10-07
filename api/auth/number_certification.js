// utils
const response = require("../../util/response");

module.exports = async (req,res) => {
    let {number} = req.body;
    _number = req.session.number;

    if(_number) {
        if(number == _number){
            response(res, 200, "[number_certification] 인증 완료.", null);
        }else{
            response(res, 409, "[number_certification] 인증번호가 틀림.", null);
        }
    }else{
        response(res, 409, "[number_certification] 인증번호 만료.", null);
    }
};
