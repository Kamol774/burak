import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";


const productService = new ProductService();  // ProductService classdan instance olib productService variable ga tenglashtirib olyapmiz

const productController: T = {};

/** SPA *///////////////////////////////////////////////////////////////




/** SSR *///////////////////////////////////////////////////////////////

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();

    res.render("products", { products: data }) // render ni 2-argumenti qanday nom bn nomlash: products deb nomladik
  } catch (err) {
    console.log("Error getAllProducts", err)
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
  try {
    console.log("createNewProduct");
    if (!req.files.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    const data: ProductInput = req.body; // kirib kelayotgan ma'lumotni data variable ga tenglayapmiz
    data.productImages = req.files.map(ele => {
      return ele.path.replace(/\\/g, "/");
    });

    await productService.createNewProduct(data)
    console.log("data=>", data);
    res.send(`<script> alert("Successful creation!"); window.location.replace('admin/product/all') </script>`);
  } catch (err) {
    console.log("Error createNewProduct", err)
    const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("${message}"); window.location.replace('admin/product/all') </script>`);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    const id = req.params.id;
    console.log("id:", id);

    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;