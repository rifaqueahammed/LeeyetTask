const express = require("express");

const router = express.Router();
const userRegistration = require("../Controllers/Registration");
const UserHome = require("../Controllers/Home");
const UserLogin = require("../Controllers/Login");

router.post("/registration",userRegistration.userRegistration);
router.post("/login",UserLogin.userLogin);
router.post("/home",UserHome.userDetailes);

module.exports = router;