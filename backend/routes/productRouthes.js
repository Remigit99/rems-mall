import express from "express";

import { getAllproducts } from "../controllers/productController.js";



const productRoutes = express.Router()

productRoutes.get("/getAllProducts", getAllproducts)


export default productRoutes