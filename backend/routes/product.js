import express from 'express';
import productModel from '../models/productModel.js'


const router = express.Router()


router.get('/products', async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);

    } catch {
        res.status(404).json({ message: error.message});
    }
});


export default router;