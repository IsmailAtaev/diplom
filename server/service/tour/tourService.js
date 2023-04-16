const { ObjectId } = require("mongodb");
const TourModel = require("../../models/tour/tourModel");
const { onlineTicket } = require("../pdf/pdfTicket");
const mailService = require("../mail/mailService");
const { nanoid } = require("nanoid");
const CardValidationId = require("../../models/validCardId/validateCardId");
const BookingModel = require("../../models/booking/bookingModel");
const UserModel = require("../../models/user/userModel");

// const fs = require("fs");
// const PDFDocument = require("pdfkit");

class TourService {
  async getAllTours() {
    const tours = await TourModel.find();
    return tours;
  }

  async createTour(name, type, date, country, city, price, duration) {
    const tour = await TourModel.create({
      name,
      type,
      date,
      country,
      city,
      price,
      duration,
    });
    return tour;
  }

  async delete(id) {
    const removedTour = await TourModel.deleteOne({ _id: id });
    return removedTour;
  }

  async validateIdCard(email) {
    let ID = nanoid(4);
    const cardValid = await CardValidationId.create({
      validateCard: ID,
      email: email,
    });
    mailService.sendValidateCard(email, ID);
    return cardValid;
  }

  async buyTour(objInfoBuyTour) {
    const invoice = {
      shipping: {
        name: "John Doe",
        address: "1234 Main Street",
        city: "San Francisco",
        state: "CA",
        country: "US",
        postal_code: 94111,
      },
      items: [
        {
          item: "TC 100",
          description: "Toner Cartridge",
          quantity: 2,
          amount: 6000,
        },
        {
          item: "USB_EXT",
          description: "USB Cable Extender",
          quantity: 1,
          amount: 2000,
        },
      ],
      subtotal: 8000,
      paid: 0,
      invoice_nr: 1234,
    };

    console.log("objInfoBuyTour: ", objInfoBuyTour);

    const { customers, mainClient, tour } = objInfoBuyTour;
    const pathName = `C:/Users/admin/Desktop/diplom/server/pdf/${mainClient.firstName}.pdf`;
    console.log("pathName: ", pathName);

    const cardValidation = await CardValidationId.findOne({
      email: mainClient.email,
      validateCard: mainClient.codeId,
    });

    if (!cardValidation) {
      return { elem: "not found code or email" };
    }

    //const tourDB = await TourModel.findOne({ _id: tour._id });
    onlineTicket(invoice, pathName);
    mailService.sendTicket(pathName, mainClient.firstName, mainClient.email);
    return { elem: "vse super " };
  }

  async reservationTour(objInfoBuyTour) {
    const { customers, mainClient, tour, card } = objInfoBuyTour;

    const tourModel = await TourModel.findOne({
      _id: tour._id,
      country: tour.country,
    });
    if (!tourModel) {
      return { elem: "нету такого тура" };
    }

    const userModel = await UserModel.findOne({
      _id: mainClient.id,
      email: mainClient.email,
    });
    if (!userModel) {
      return { elem: "нету такого пользователя" };
    }

    const cardValidationModel = await CardValidationId.findOne({
      email: mainClient.email,
      validateCard: card.codeId,
    });
    if (!cardValidationModel) {
      return { elem: "Неверный код подтверждение" };
    }

    const cost = tour.price * customers.length;
    const pay = 30 * (cost / 100);
    const needToPay = cost - pay;

    const btm = await BookingModel.create({
      user: userModel._id,
      tour: tourModel._id,
      pay,
      needToPay,
      price: cost,
      customers,
    });

    const cardValidationRemove = await CardValidationId.deleteOne({
      email: mainClient.email,
      validateCard: card.codeId,
    });

    return { booking: "Тур успешно забронирован" };
  }

  async getReservationTour(user) {
    const userModel = await UserModel.findOne({
      _id: user.id,
      email: user.email,
    });
    if (!userModel) {
      return { elem: "Нету такого пользователя" };
    }

    if (user.role === "USER") {
      console.log(userModel);
      const id = userModel._id;

      const getBooking1 = await BookingModel.find({ user: id });
      // const getBookingUser = await BookingModel.find({ user: userModel._id });
      // //console.log(getBooking[0].user);
      // console.log("getBookingUser ", getBooking1);
      let arr = [];
      for (let i = 0; i < getBooking1.length; i++) {
        const tourInfo = await TourModel.findOne({ _id: getBooking1[i].tour });
        const bookingInfo = getBooking1[i];
        arr.push({ bookingInfo, tourInfo, userInfo: userModel });
      }
      return arr;
    }
    /*
    console.log("== ", getBookingUser[0].user);
    console.log("=+  ", typeof getBookingUser[0].user);

       getBooking[1].user = {};
         getBooking[1].user = { ...userBooking };

    const result1 = getBookingUser.map(async (elem) => {
      const tourInfo = await TourModel.findOne({ _id: elem.tour });
      console.log("===========================================");
      console.log("tour: ", tourInfo);
      console.log("===========================================");

      const userBooking = await UserModel.findOne({ _id: elem.user });
      console.log("===========================================");
      console.log("user: ", userBooking);
      console.log("===========================================");

      return { ...tourInfo, userInfo: { ...userBooking } };
    });
    console.log("result1: ", result1);

    /

    const userBooking = await UserModel.findOne({ _id:  });
    console.log("userBooking: ", userBooking);

    const result = getBookingUser.map((elem) => {
      const tourId = JSON.stringify(elem.tour);
      console.log("tourId: ", tourId);
      console.log("tourId: ", typeof tourId);
      console.log("tourId: ", JSON.stringify(tourId));
      const tourInfo = await TourModel.findOne({ _id: elem.tour });
      console.log("=DB=");
      console.log("===========================================");
      console.log("tour: ", tourInfo);
      console.log("===========================================");

      console.log("=DB=");
      console.log("===========================================");
      console.log("user: ", userBooking);
      console.log("===========================================");
      console.log("elem: ", elem);
      console.log("elem: ", Object.assign(elem, userBooking));
      let e = {}
      let e = { elem, ...userBooking._doc };
      return e;
      { elem, ...userBooking._doc };
      elem.user = { ...userBooking };
      console.log(typeof elem.user);
      console.log(elem.user);

      elem = { elem, userInfo: { ...userBooking._doc } };
      return elem;
    });

    console.log("result: ", result);
*/

    const getBooking = await BookingModel.find();
    let arrAdmin = [];
    for (let i = 0; i < getBooking.length; i++) {
      const tourInfo = await TourModel.findOne({ _id: getBooking[i].tour });
      const userInfo = await UserModel.findOne({ _id: getBooking[i].user });
      const bookingInfo = getBooking[i];
      arrAdmin.push({ bookingInfo, tourInfo, userInfo });
    }
    return arrAdmin;
  }
}

/*
const rrr = async (file) => {
  let doc = new PDFDocument();
  doc
    .image("C:/Users/admin/Desktop/diplom/server/assets/logo.jpg", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("Travel Compony", 110, 57)
    .fontSize(10)
    .text("123 Main Street", 200, 65, { align: "right" })
    .text("New York, NY, 10025", 200, 80, { align: "right" })
    .moveDown();
  doc.end();
  doc.pipe(fs.createWriteStream(file));
};*/

module.exports = new TourService();
