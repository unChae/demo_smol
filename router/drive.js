const api = require("../api/drive");
module.exports = (router) => {
    
    // 데이터 백업
    router.post('/backup', api.backup);

    return router;
};
