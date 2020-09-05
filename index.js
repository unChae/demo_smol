/* 모듈 호출 */
const express = require('express');
const app = express();

/* 서버 구동 */
// const fs = require('fs');
const http = require('http');
// const https = require('https');

// 인증서 호출
// const privateKey = fs.readFileSync('./config/ssl/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('./config/ssl/cert.pem', 'utf8');
// const ca = fs.readFileSync('./config/ssl/chain.pem', 'utf8');

// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });
