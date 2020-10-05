// aws sdk 호출 및 설정
const jwt = require("jsonwebtoken");
// const config = process.env.SECRET_KEY

module.exports = (user) => {
    let {us_name, us_phone_number} = user;
    return jwt.sign({us_name, us_phone_number}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRATION_DATE,
    });
};

// 프로미스의 resolve, reject는 비동기 작업의 처리과정에서 성공/실패를 구분하는 방법이다.
// 토큰 검증하기. => 파라메터에 토큰 실어서 받아온다.
let verifyToken = token =>
    new Promise((resolve, reject) => {
        // 토큰 검증해서 비동기 작업 처리 과정의 성공 / 실패 를 반환한다.
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if (err) return reject(err);
            resolve(payload);
        });
    });

// middleware 미들 웨어 설정
// TODO 미들웨어 쿼리문 Sequelize문으로 변경
exports.authenticateUser = async (req, res, next) => {
    // 해더에 토큰이 없는 경우
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'token must be included' });
    }

    // 헤더에 토큰이 있는 경우
    let token = req.headers.authorization;
    let payload;
    
    try {
        payload = await verifyToken(token);
    } catch (error) {
        return res.status(401).json({ message: 'token is invalid' });
    }

    let user = await User.findAll({
        attributes: { exclude: ['us_password'] },
        where: { us_phone_number: payload.us_phone_number },
        plain: true,
    });

    // 홈페이지 접속자가 토큰은 보유하고 있지만 회원이 아닌 경우
    if (!user) {
        return res.status(401).json({ message: 'user is not found' });
    }

    req.user = user;
    next();
};