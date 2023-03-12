const Router = require("express");
const controller = require("./tourController");

const router = new Router();


router.post('/create', controller.createTour);
router.get("/tour", controller.getTours);






module.exports = router;
