import cloudinary from "../lib/cloudinary.js"
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

export const getFeaturedProducts = async(req, res) =>{

    try {
        
        const featuredProducts = await Product.find({isFeatured : true}).lean()
        if(!featuredProducts){
            return res.status(404).json({msg: "No featured products"})

        } 

        res.json(featuredProducts)
    } catch (error) {
        res.status(500).json({msg: "Somehing when wrong"})
    }
}

export const createProduct = async(req,res) =>{
    
    try {
        const {name, description, price, category, image} = req.body
        
        let cloudinaryResponse = null;

        if (image){
            cloudinaryResponse = await cloudinary.uploader.upload(image, {folder:"products"})

            const product = await Product.create({
                name, 
                description, 
                price, 
                category, 
                image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : ""
            })
        }
    } catch (error) {
        
        console.log("Error in createProduct controller", error.message)
        res.status(500).json({msg: "server error"})
    }



}


export const deleteProduct = async(req, res) =>{
     try {
        const product=  await Product.findById(req.params.id)

        if(product.image){
            const publicId = product.image.split("/").pop().split(".")[0]

            try {

                await cloudinary.uploader.destroy(`products/${publicId}`)
                console.log("Image deleted in cloudinary successfully")
            } catch (error) {
                console.log("Error deleting image from cloudinary")
                
            }
        }
     } catch (error) {
        
     }
}