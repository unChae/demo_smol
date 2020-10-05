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

    if(user == null){
        response(res, 409, "[login] 사용자 정보 없음", null);
    }

    let compare = await hash.compare(us_password, user.us_password);

    if(compare) {
        var _token = token(user);

        User.update({
            us_jwt_token: _token
        }, {
            where: {us_phone_number}
        })
        
    } else {
        response(res, 409, "[login] 사용자 정보 없음", null);
    }
    response(res, 200, "[login] 로그인 성공", _token);
}