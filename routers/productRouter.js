import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';


const productRouter = express.Router();
productRouter.get('/', (req, res) =>{
    const createdProducts = Product.insertMany(products);
    res.send({ createdProducts })
})

export default productRouter;