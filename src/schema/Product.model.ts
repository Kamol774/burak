import mongoose, { Schema } from "mongoose";
import {
  ProductSize,
  ProductStatus,
  ProductVolume,
  ProductCollection,
} from "../libs/enum/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },

    productVolume: {
      type: Number,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productView: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // updatedAt, createdAt
);

// 1ta productdan faqat 1 barta kiritilishini taminlaymiz
productSchema.index(
  { productName: 1, productSize: 1, ProductVolume: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
