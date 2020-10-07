
// models
const model = require('../../models');
const User = model.User;

// utils
const hash = require('../../util/hash');
const response = require('../../util/response');
const token = require('../../util/token');

module.exports = async (req, res) => {
    let {us_phone_number, us_password} = req.body;

    let user = await User.findOne({
        raw: true,
        where: {us_phone_number}
    })
    .catch((err) => {
        console.log("[login] 데이터베이스 오류 발생.", err);
        response(res, 500, "[login] 데이터베이스 오류 발생.", err);
    })
    
    if(user == null){
        response(res, 409, "[login] 사용자 정보 없음.", null);
    }

    let compare = await hash.compare(us_password, user.us_password);
    if(compare) {
        var _token = token(user);

        User.update({
            us_jwt_token: _token
        }, {
            where: {us_phone_number}
        })
        .catch((err) => {
            console.log("[login] 토큰 업데이트 오류 발생.", err);
            response(res, 500, "[login] 데이터베이스 오류 발생.", err);
        });
        
    } else {
        response(res, 409, "[login] 사용자 정보 없음.", null);
    }
    response(res, 200, "[login] 로그인 성공.", _token);
}