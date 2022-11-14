import express from 'express';
const router = express.Router();
import { Request, Response } from "express";
import Controller from '../controller';

router.post('/register', (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    // let { businessName, fullName, address, phone, email, password } = req.body;
    console.log(req.body, "req.body")
    const { businessName, fullName, address, phone, email, password } = req.body;
    Controller.registerBusiness(req, res)
})

export default router;