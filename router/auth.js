module.exports = (router) => {
    
    router.get('/callback', (req, res) => {
        let {code} = req.query
        res.redirect("http://114.206.236.28:3000/viewInstagram?code=" + code);
    });

    return router;
};