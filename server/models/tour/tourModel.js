const { Schema, model } = require("mongoose");

const TourSchema = new Schema({
  name: { type: String, required: true },
  tourType : { type: String, required: true },
});

module.exports = model("Tour", TourSchema);
