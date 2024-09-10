import express from 'express';
import kpiModel from '../models/kpiModel.js'


const router = express.Router()


router.get('/kpis', async (req, res) => {
    try {
        const kpis = await kpiModel.find();
        res.status(200).json(kpis);

    } catch {
        res.status(404).json({ message: error.message});
    }
});


export default router;