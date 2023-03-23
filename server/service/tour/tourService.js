const TourModel = require("../../models/tour/tourModel");

class TourService {
  async createTour(name, type, date, country, city, price, duration) {
    const tour = await TourModel.create({ name, type, date, country, city, price, duration});
    return tour;
  }
}

module.exports = new TourService();
