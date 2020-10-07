
// models
const model = require('../../models');
const User = model.User;

// utils
const response = require('../../util/response');

module.exports = async (req, res) => {
    let {us_phone_number, us_password} = req.body;
    User.update({
        us_password
    }, {
        where: {us_phone_number}
    })
    .catch((err) => {
        console.log("[update_password] 데이터베이스 오류 발생.", err);
        response(res, 500, "[update_password] 데이터베이스 오류 발생.", err);
    })
    response(res, 200, "[update_password] 비밀번호 변경 완료.", null);
}