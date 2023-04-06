const tourService = require("../../service/tour/tourService");
const decrypted = require("../../crypto/cryptography");

class TourController {
  async getTours(req, res) {
    try {
      const arrTours = await tourService.getAllTours();
      res.json(arrTours);
    } catch (e) {
      console.log(e);
    }
  }

  async createTour(req, res, next) {
    try {
      const { name, type, date, country, city, price, duration } = req.body;
      const ss = await tourService.createTour(
        name,
        type,
        date,
        country,
        city,
        price,
        duration
      );
      res.json({ elem: "add db " });
    } catch (e) {}
  }

  async removeTour(req, res, next) {
    try {
      //const {tourId} = req.body;
      const removedTour = await tourService.delete(req.params.id);
      console.log("tur delete = ", removedTour);
      res.json({ removedTour });
    } catch (e) {
      res.json({ removedTour: "tour do not deleted" });
    }
  }

  async bookingTour(req, res, next) {
    try {
      const { clientInfoBooking } = req.body;

      console.log(clientInfoBooking);
      console.log("---------------------------------------------");
      let qq = decrypted(clientInfoBooking);
      console.log("parse: ", JSON.parse(qq));
      res.json({ elem: "booking tour " });
    } catch (e) {
      next();
    }
  }
}

module.exports = new TourController();
