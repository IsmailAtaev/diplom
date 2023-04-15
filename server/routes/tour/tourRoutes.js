const Router = require("express");
const controller = require("./tourController");

const router = new Router();

router.post("/create", controller.createTour);
router.get("/tour", controller.getTours);
router.delete("/remove/:id", controller.removeTour);
router.post("/api/buy/tour", controller.buyTour);
router.post("/api/buy/validate", controller.validateCardId);
router.post("/api/booking/tour", controller.bookingTour);
router.get("/api/get/booking/tour/:id", controller.getBookingTour);

module.exports = router;
