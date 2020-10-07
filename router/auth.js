const api = require("../api/auth");
module.exports = (router) => {
    
    // 휴대폰 인증
    router.post('/certification', api.certification);
    
    // 회원가입
    router.post('/regist', api.regist);

    // 로그인
    router.post('/login', api.login);
    
    // 인증번호 확인
    router.post('/number_certification', api.number_certification);
    
    return router;
};
