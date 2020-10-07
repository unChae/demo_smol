const api = require("../api/auth");
const api_test = require("../api/api");

module.exports = (router) => {
    
    // 휴대폰 인증
    router.post('/certification', api.certification);
    
    // 회원가입
    router.post('/regist', api.regist);

    // 로그인
    router.post('/login', api.login);
    
    // 인증번호 확인
    router.post('/number_certification', api.number_certification);
    
    // 비밀번호 변경
    router.post('/update_password', api.update_password);

    // 검수용 라우터
    router.post('/get_user_data', api_test.get_user_data);
    router.post('/set_user_data', api_test.set_user_data);
    router.get('/get_feed_data', api_test.get_feed_data);
    router.get('/callback', (req, res) => {
        let {code} = req.query; 
        res.redirect("https://web.unchae.com/login/" + code);
    });

    return router;
};
