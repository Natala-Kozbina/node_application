const log = require( INCPATH + '/log')(module);
const express = require('express');
const router = express.Router();
const UserModel = require(INCPATH + '/mongoose').UserModel;

router.get("/test", function(req, res) {
    const user = UserModel({
        name: 'test'
    });

    UserModel.find((err, users) => {
        if(err) {
            log.error('Error find users in Mongo');
        }
        log.info('Users finds');
        console.log(users);
        res.end(JSON.stringify(users));
    });
});

module.exports = router;
