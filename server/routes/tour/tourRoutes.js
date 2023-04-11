const Router = require("express");
const controller = require("./tourController");

const router = new Router();


router.post('/create', controller.createTour);
router.get("/tour", controller.getTours);
//router.post("/remove", controller.removeTour);
router.delete("/remove/:id", controller.removeTour);
router.post("/api/buy/tour", controller.buyTour)
router.post("/api/buy/validate", controller.validateCardId)


    

module.exports = router;
