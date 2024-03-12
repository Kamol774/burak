import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";


// get has two argument =>
// 1: endpoint (url)
// 2: restaurantController ga bogliq methodlar


// Restaurant
routerAdmin
  .get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
routerAdmin
  .get("/logout", restaurantController.logout)

routerAdmin.get("/check-me", restaurantController.checkAuthSession);
// Product
routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct);

// User


export default routerAdmin