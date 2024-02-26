

// Architectural pattern: MVC, Dependency Injection, MVP - backend yoki frontend ni qurib beradigan suyak (arxitektura)
// Design pattern: Middleware, Decorator  -  ma'lum bir bo'limlarni(uchastkalarni) masalasini hal qilib beradigan vositachi pattern.   

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