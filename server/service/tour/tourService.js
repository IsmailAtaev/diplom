const { ObjectId } = require("mongodb");
const TourModel = require("../../models/tour/tourModel");

class TourService {
  
  async getAllTours() {
      const tours = await TourModel.find();
      //console.log(tours);
      return tours; 
  }
  
  async createTour(name, type, date, country, city, price, duration) {
    const tour = await TourModel.create({ name, type, date, country, city, price, duration});
    return tour;
  }

  async delete(id) {
    const removedTour = await TourModel.deleteOne({"_id": id});
    return removedTour;
  }



}

module.exports = new TourService();
