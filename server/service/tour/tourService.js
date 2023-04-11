const { ObjectId } = require("mongodb");
const TourModel = require("../../models/tour/tourModel");
const { onlineTicket } = require("../pdf/pdfTicket");
const mailService = require("../mail/mailService");
const { nanoid } = require("nanoid");
const CardValidationId = require("../../models/validCardId/validateCardId");
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
