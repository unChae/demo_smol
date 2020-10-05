const sms = require("../../util/sms");

module.exports = async (req, res) => {
    let {us_phone_number} = req.body;
    // sms.set_us_phone_number(us_phone_number);
    sms.send_sms();
    res.send("test");
}