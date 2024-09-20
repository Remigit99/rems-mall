import express from "express";

import { getAllproducts } from "../controllers/productController.js";
import { protectedRoute, adminRoute } from "../middleware/authMiddleware.js";


const productRoutes = express.Router()

productRoutes.get("/getAllProducts" , protectedRoute, adminRoute, getAllproducts)


export default productRoutes