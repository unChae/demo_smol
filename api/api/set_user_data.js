// models
const models = require("../../models");
const User = models.User;

// modules
const response = require("../../util/response");

module.exports = async (req, res) => {
    let {us_name, us_id} = req.body;
    let us_phone_number = us_id;
    let us_photo = "https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1"
    console.log(us_phone_number);
    
    let user = await User.findOne({
        where: {us_phone_number},
        raw: true
    })
    .catch((err) => {
        console.log("[set_user_data] 데이터베이스 오류 발생.", err);
        response(res, 500, "[set_user_data] 데이터베이스 오류 발생.", err);
    })

    if(!user) {
        User.create({
            us_phone_number,
            us_name,
            us_password: "apitestpassword",
            us_photo
        })
        .then((user) => {
            response(res, 200, "[set_user_data] 회원 가입 완료.", user);
        })
        .catch((err) => {
            response(res, 500, "[set_user_data] 데이터베이스 오류 발생.", err);
        })
    }
    response(res, 200, true, "[set_user_data] 이미 존재하는 계정입니다.", null);
}