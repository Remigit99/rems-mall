import { Product } from "../models/productModel.js"

export const getAllproducts = async(req, res)=>{

    try {
        const products = await Product.find({})
        // res.send(JSON.stringify(products))
        res.json({products})

    } catch (error) {
        console.log("Error getting all products")
    }
}