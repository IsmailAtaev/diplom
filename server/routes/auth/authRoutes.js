const Router = require("express");
const router = new Router();
const controller = require("./authController");

router.get("/users", controller.getUsers);






module.exports = router;
