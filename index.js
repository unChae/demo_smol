/* 모듈 호출 */
const express = require('express');
const session = require('express-session');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

/* 데이터베이스 연결 */
const models = require("./models/index.js");

models.sequelize.sync().then( () => {
	console.log("DB connect");
}).catch(err => {
	console.log("DB connect fail");
	console.log(err);
});

/* 서버 구동 */
const fs = require('fs');
const http = require('http');
const https = require('https');

// // 인증서 호출
const privateKey = fs.readFileSync('/etc/letsencrypt/live/unchae.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/unchae.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/unchae.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

/* 모듈 설정 */

// body-paerser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use static folder
app.use(express.static('public'));
// cors
app.use(cors());
// dotenv
require('dotenv').config();
//expression
app.use(session({
	secret: '12sdfwerwersdfserwerwe',
	resave:true,
	saveUninitialized : true,
	cookie : {
		maxAge : 1000*60*3
	}
}));

// 라우팅
const router = express.Router();

const authRouter = require('./router/auth')(router);
app.use('/auth', authRouter);

const driveRouter = require('./router/drive')(router);
app.use('/drive', driveRouter);

app.get("/", (req, res) => {
    let response_data = {
        status:200,
        message:"Hello world!",
        data:null
    }
    res.status(200).json(response_data);
})