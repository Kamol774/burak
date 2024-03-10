import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";


// get has two argument =>
// 1: endpoint (url)
// 2: restaurantController ga bogliq methodlar


// Restaurant
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);
// Product

// User


export default routerAdmin