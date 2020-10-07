// modules
const fetch=require("node-fetch");

// utils
const response = require("../../util/response");

module.exports = async (req, res) => {
    let {us_access_token} = req.query;
    
    let url = "https://graph.instagram.com/me/media?";
    url += "fields=id,username,media_type,media_url,timestamp,caption&access_token=" + us_access_token;
    let data = [];
    
    let _data = await fetch(url, {
      method: "GET",
      headers: {
          'Content-Type':'application/json'
      }
    })
    .then(response => response.json());
    
    data.push(_data);
    
    try{
      url = _data.paging.next
      while(true) {
        let nextData = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        })   
        .then(response => response.json()) 

        data.push(nextData);

        if(!nextData.paging.next) {
            break;
        }
        url = nextData.paging.next;
      }
    }catch(err){
        console.log("[get_feed_data] 인스타그램 데이터가 존재하지 않음.");
        response(res, 409, "[get_feed_data] 인스타그램 데이터가 존재하지 않음.", null);
    }

    response(res, 200, '[get_feed_data] 인스타그램 데이터 반환', data);
}