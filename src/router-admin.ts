import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";


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
  .post("/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup);
routerAdmin
  .get("/logout", restaurantController.logout)

routerAdmin.get("/check-me", restaurantController.checkAuthSession);



// Product
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,  //middleware
  productController.getAllProducts);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,  //middleware
  // uploadProductImage.single('productImage'), --> faqatgina product uchun uploader
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,  //middleware
  productController.updateChosenProduct);

// User
routerAdmin.get(
  "/user/all",
  restaurantController.verifyRestaurant,
  restaurantController.getUsers)

routerAdmin.post(
  "/user/edit",
  restaurantController.verifyRestaurant,
  restaurantController.updateChosenUser)

export default routerAdmin