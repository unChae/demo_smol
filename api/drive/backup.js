// models
const model = require('../../models');

// utils
const response = require('../../util/response');
const image = require('../../util/image');

module.exports = async (req, res) => {
    let {sn_id} = req.query;;
    switch(Number(sn_id)){
        case 1:
            instagram(res);
        default:
            break;
    }
 
}

async function instagram(res) {
    let image_url = "https://pbs.twimg.com/media/D0AEcLJVYAErhXl.jpg"
    await image.set_base64(image_url);
    image.s3_upload();
    // image.s3_upload("https://pbs.twimg.com/media/D0AEcLJVYAErhXl.jpg");
    // let url = "https://api.instagram.com/oauth/authorize?client_id=" + process.env.INSTAGRAM_CLIENT_ID + "&redirect_uri=" + process.env.INSTAGRAM_REDIRECT_URI + "&scope=user_profile,user_media&response_type=code";
    // res.redirect(url);
    /*
        1. url로 redirect
        2. app에서 정보 동의 수락
        3. server로 code값 받기
        4. axios로 access_token값 반환
        5. access_token을 활용하여 데이터 반환
        6. 이미지 url로 s3에 파일 생성
        7. 데이터베이스에 데이터 저장
        8. 저장된 데이터 담아서 반환
    */ 
    response(res, 200, "[backup] 이미지 업로드 완료.", null)
}