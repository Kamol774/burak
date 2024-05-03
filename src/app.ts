import cors from "cors";
import express from 'express';
import path from 'path';
import router from './router';
import routerAdmin from './router-admin';
import cookieParser from "cookie-parser"
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/common';

const MongoDBStore = ConnectMongoDB(session);  // session uchun ham MongoDB ga connect bo'ldik
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: 'sessions'
});
// Express imiz 4 qismdan iborat !
// 1 - ENTRANCE
const app = express();
app.use(express.static(path.join(__dirname, "public")));  // public ni static folderga aylantirib beradi (userlar uchun bu folder ochiq bo'ladi)
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true })); // (traditional requestlarni qabul qilish uchun) parse incoming URL-encoded form data from the request body. { extended: true }: nested objects and arrays to be encoded in the URL.
app.use(express.json()); // built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());// (request dagi cookies larni parse qilish uchun)
app.use(morgan(MORGAN_FORMAT)); // log information about incoming requests, including details like request method, URL, status code, response time, and more.

// 2 - SESSIONS
app.use( // They can handle requests, modify the request or response objects, and perform other tasks.
  session({
    secret: String(process.env.SESSION_SECRET), // .env dagi SESSION_SECRET
    cookie: {
      maxAge: 1000 * 60 * 100 // 30minutes => yashash muddati
    },
    store: store,  // yuqorida ko'rsatilgan MongoDBStore ni takidlab ketyapmiz.
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true, // oxirgi update dan boshlab maxAge da berilgan vaqtgacha mavjud bo'ladi, agar false bolsa birinchi kirgan vaqtdan boshlab maxAge gaja mavjud boladi(update larga qarab resave bolmaydi).
    saveUninitialized: true
  })
);


app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;  // brawser(frontend)da qabul qilishimiz mumkin bo'lgan variablelar ni middleware orqali integratsiyasi
  next();
})


// 3 - VIEWS
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs") // adminka loyihamiz BSSr da qurilgan. Biz "ejs" templating engine dan foydalanyapmiz


// 4 - ROUTERS 
app.use("/admin", routerAdmin)  // EJS
app.use("/", router)            // REACT

export default app;     //moduleJS ==> module.exports = app 