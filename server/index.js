const express = require('express')
const {json} = require("express");
const mongoose = require('mongoose');
const authRouter = require('./routes/auth/authRoutes')
const tourRouter = require('./routes/tour/tourRoutes')
const cors = require('cors')


const PORT = process.env.PORT || 5010;

const app = express();

app.use(cors())
app.use(json());

app.use("/auth", authRouter);
app.use("/", tourRouter);








const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/travel');
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}


start();
