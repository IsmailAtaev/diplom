require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//const authRouter = require("./routes/auth/authRoutes");
const userRouter = require("./routes/user/useRoutes");
const tourRouter = require("./routes/tour/tourRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5011;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//app.use("/auth", authRouter);
app.use("/api", userRouter);
app.use("/", tourRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL); //"mongodb://localhost:27017/travel"
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
