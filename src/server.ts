// Architectural pattern: MVC, Dependency Injection, MVP - backend yoki frontend ni qurib beradigan suyak (arxitektura). Yani backendni malumotlar oqimini tartibga soladigon vosita.

// Design pattern: Middleware, Decorator  -  ma'lum bir bo'limlarni(uchastkalarni) masalasini hal qilib beradigan vositachi pattern.

// MVC => Module View Controller
// MVP => Model View Presenter

// mahfiy malumotlarni publicga chiqarmaslik uchun .env ga joylab qoyamiz

/* import moment from "moment";  //   =>  commonjs da const moment = require("moment") */

// Cluster => Database => Collection => Document => Dataset

import dotenv from "dotenv"; // hardoim dotenv yuqorida(birinchida) turishi shart
dotenv.config({
  path: process.env.NODE_ENV === "production " ? ".env.production" : ".env",
});

import mongoose from "mongoose";
import server from "./app";

mongoose // MongoDB ga mongoose orqali ulanyapmiz
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    // connection success bo'lgandan keyin  <<<EXPRESS>>> qurilyapti va u APP.ts ichida hosil qilinyapti
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
      console.info(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("Error on connection MongoDB", err));
