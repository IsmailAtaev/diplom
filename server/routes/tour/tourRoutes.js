const Router = require("express");
const router = new Router();
const controller = require("./tourController");

router.get("/tour", controller.getTours);
router.post('/tour/create', controller.createTour);





module.exports = router;
