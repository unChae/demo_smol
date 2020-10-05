/* 모듈 호출 */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');



/* 모듈 설정 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();

app.use(cors());

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

// 인증서 호출
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

// use static folder
app.use(express.static('public'));

// 라우팅
const router = express.Router();

const authRouter = require('./router/auth')(router);
app.use('/auth', authRouter);

app.get("/", (req, res) => {
    res.send("Hello world~!");
})