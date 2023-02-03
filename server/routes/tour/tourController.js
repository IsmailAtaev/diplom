const tours = [
  {
    id: 1,
    country: "USA",
    city: "NYC",
    type: "excursion",
    duration: 12,
    price: 170,
  },
  {
    id: 2,
    country: "Japan",
    city: "Tokyo",
    type: "excursion",
    date: "11.12.2022",
    duration: 5,
    price: 543,
  },
  {
    id: 3,
    country: "Russia",
    city: "Moscow",
    type: "excursion",
    date: "9.5.2021",
    duration: 3,
    price: 380,
  },
  {
    id: 4,
    country: "Italia",
    city: "Moscow",
    type: "Cruises",
    date: "9.5.2021",
    duration: 3,
    price: 380,
  },
  {
    id: 5,
    country: "Italia",
    city: "Moscow",
    type: "Cruises",
    date: "9.5.2021",
    duration: 3,
    price: 380,
  },
  {
    id: 6,
    country: "Italia",
    city: "Moscow",
    type: "Cruises",
    date: "9.5.2021",
    duration: 3,
    price: 380,
  },
  {
    id: 7,
    country: "Italia",
    city: "Moscow",
    type: "Cruises",
    date: "9.5.2021",
    duration: 3,
    price: 380,
  },
];

class TourController {
  async getTours(req, res) {
    try {
      res.json(tours);
    } catch (e) {
      console.log(e);
    }
  }

  async createTour(req, res, next) {
    try {


        let {name, type} = req.body;
        console.log("name: " + name);
        console.log("type: " + type);
    } catch (e) {

    }
  }
}

module.exports = new TourController();
