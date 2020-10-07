// models
const models = require("../../models");
const User = models.User;

// modules
const response = require("../../util/response");

module.exports = async (req, res) => {
    let {user_id} = req.body;
    let us_phone_number = user_id;
    try{
        let user = await User.findOne({
            where: {us_phone_number}
        })
        .catch((err) => {
            console.log("[get_user_data] 데이터베이스 오류 발생.", err);
            response(res, 500, "[get_user_data] 데이터베이스 오류 발생.", err);
        })
        console.log(user);
        response(res, 200, "[get_user_data] 유저 데이터 반환 완료.", user);
    }catch(err) {
        response(res, 409, "[get_user_data] 등록되지 않은 유저.", null);
    }
}