const path = require('path');


// app - это мой экспресс
module.exports = function(app) {

    // route for home page
    app.get("/api/test", function(req, res) {
        console.log(res);
        res.send('отправляю данные');
        // res.sendFile(path.resolve( publicPath , 'index.html' ));
    });
    // route for showing the profile page
    app.get('/profile', function(req, res) {
        console.log(res);
    });
    // route for logging out
    app.get('/logout', function(req, res) {
        console.log(res);
    });
};