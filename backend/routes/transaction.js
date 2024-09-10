import express from 'express';
import transactionModel from '../models/transactionModel.js'


const router = express.Router()


router.get('/transactions', async (req, res) => {
    try {
        const transactions = await transactionModel.find()
        .limit(50)
        .sort({ createdOn: -1 });
        res.status(200).json(transactions);

    } catch {
        res.status(404).json({ message: error.message});
    }
});


export default router;