module.exports = app => {
    const auth = require("../controller/auth.controller");

    var router = require("express").Router();


    router.post("/signup",  auth.signup); 

    router.post("/signin",  auth.signin); 


    app.use('/api/auth', router);


}