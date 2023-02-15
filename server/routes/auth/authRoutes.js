const Router = require("express");
const router = new Router();
const controller = require("./authController");



router.get("/users", controller.getUsers);
router.post("/registration", controller.registration);






module.exports = router;
