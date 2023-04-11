const tourService = require("../../service/tour/tourService");
const decrypted = require("../../crypto/cryptography");
const mailService = require("../../service/mail/mailService");

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

  async validateCardId(req, res, next) {
    try {
      const { email } = req.body;
     // console.log(email.email);
      const Id = await tourService.validateIdCard(email.email);
      if (!Id) {
        Id = "error";
      }

      res.json({ Code: Id });
    } catch (e) {
      next();
    }
  }

  async buyTour(req, res, next) {
    try {
      const { clientInfoBooking } = req.body;

      //console.log(clientInfoBooking);
      const buyTourData = await tourService.buyTour(
        JSON.parse(decrypted(clientInfoBooking))
      );
      // const email = "";
      // const fileName = "vfvf";
      // const dirName =
      //   "C:/Users/admin/Desktop/diplom/server/pdf/" + fileNme + ".pdf";
      //mailService.sendTicket(dirName, fileName, email);
      res.json({ elem: buyTourData });
    } catch (e) {
      next();
    }
  }
}

module.exports = new TourController();
