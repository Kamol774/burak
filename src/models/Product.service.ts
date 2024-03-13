import ProductModel from "../schema/Product.model";



class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel; // productModel ni schema dagi ProductModel iga tenglab olamz 
  }


}


export default ProductService;  