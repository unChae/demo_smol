// models
const model = require('../../models');

// utils
const response = require('../../util/response');

module.exports = async (req, res) => {
    response(res, 200, "[backup] 데이터 백업 성공", null);
}