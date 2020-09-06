const axios = require('axios');

module.exports = (router) => {
    
    router.get('/callback', (req, res) => {
        let {code} = req.query
        if(code){
            console.log(code);
            let url = "https://api.instagram.com/oauth/access_token";
            let client_id = "313644806410600";
            let client_secret = "8a6e62a58a13ae8b0bc77c4264addd33";
            let grant_type = "authorization_code";
            let redirect_uri = "https://unchae.com/auth/callback";
            
            axios.post(url, {
                client_id,
                client_secret,
                grant_type,
                redirect_uri,
                code
            })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }else {
            console.log(req.query);
        }

        
    });
    
    router.post('/callback', (req, res) => {
        console.log("post", req.query);
        console.log("post", req.body);
    })
    
    router.get('/access_token', (req, res) => {
        res.send(req.query);
    })

    return router;
};