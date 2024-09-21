import express from "express";

import { getAllproducts, getFeaturedProducts, createProduct, deleteProduct } from "../controllers/productController.js";
import { protectedRoute, adminRoute } from "../middleware/authMiddleware.js";


const productRoutes = express.Router()

productRoutes.get("/getAllProducts" , protectedRoute, adminRoute, getAllproducts)

productRoutes.get("/featuredRoutes", getFeaturedProducts)

productRoutes.post("/", protectedRoute, adminRoute, createProduct)

productRoutes.delete("/:id", protectedRoute, adminRoute, deleteProduct)

export default productRoutes