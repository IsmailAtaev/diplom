const TourModel = require("../../models/tour/tourModel");

class TourService {
  async createTour(name, tourType) {
    const tour = await TourModel.create({ name, tourType });
    console.log("qwerty ", tour);
    return tour;
  }
}

module.exports = new TourService();
