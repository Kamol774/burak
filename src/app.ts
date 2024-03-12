import express from 'express';
import path from 'path';
import router from './router';
import routerAdmin from './router-admin'
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/common';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore(
  {
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
  });

// 1 - ENTRANCE
const app = express();
app.use(express.static(path.join(__dirname, "public")));  // public ni static folderga aylantirib beradi
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

// 2 - SESSIONS
app.use(
  session({
    secret: String(process.env.SESSION_SECRET), // .env dagi SESSION_SECRET
    cookie: {
      maxAge: 1000 * 60 // 3h => yashash muddati
    },
    store: store,  // yuqorida ko'rsatilgan MongoDBStore ni takidlab ketyapmiz.
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true, // oxirgi update dan boshlab maxAge da berilgan vaqtgacha mavjud bo'ladi, agar false bolsa birinchi kirgan vaqtdan boshlab maxAge gaja mavjud boladi(update larga qarab resave bolmaydi).
    saveUninitialized: true
  })
);


app.use(function(req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;  // brauser ni variablelari
  next();
})

// 3 - VIEWS
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs")


// 4 - ROUTERS 
app.use("/admin", routerAdmin)  // EJS
app.use("/", router)            // REACT

export default app;     //moduleJS ==> module.exports = app 