import express from 'express';
const router = express.Router();
import { Request, Response } from "express";
import Controller from '../controller';

router.post('/register', (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    const { businessName, fullName, address, phone, email, password } = req.body;
    Controller.registerBusiness(req, res)
})
router.post('/signIn', (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    const { email, password } = req.body;
    Controller.signIn(req, res);
})

export default router;