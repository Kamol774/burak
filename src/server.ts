

// Architectural pattern: MVC, Dependency Injection, MVP - backend yoki frontend ni qurib beradigan suyak (arxitektura). Yani backendni malumotlar oqimini tartibga soladigon vosita.


// Design pattern: Middleware, Decorator  -  ma'lum bir bo'limlarni(uchastkalarni) masalasini hal qilib beradigan vositachi pattern.   

// MVC => Module View Controller
// MVP => Model View Presenter

// mahfiy malumotlarni publicga chiqarmaslik uchun .env ga joylab qoyamiz

/* import moment from "moment";  //   =>  commonjs da const moment = require("moment") */

// Cluster => Database => Collection => Document => Dataset

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from './app';

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log('MongoDB connection succeed');
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`)
    })
  })
  .catch((err) => console.log("Error on connection MongoDB", err));