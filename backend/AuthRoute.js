const { Signup } = require("./controllers/AuthController.js");
const {Login} = require("./controllers/LoginController.js")
const router = require("express").Router();
const {userVerification} = require("./Middlewares/AuthMiddleware.js");

router.post("/user",userVerification);
router.post("/signup", Signup);
router.post("/login",Login);


module.exports = router;