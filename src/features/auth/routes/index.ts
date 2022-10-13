const express = require('express');
const router = express.Router();
import { Request, Response } from "express";
import Controller from '../controller';

router.get('/register', (req: Request, res: Response) => {
        // #swagger.tags = ['Auth']
        // let { businessName, fullName, address, phone, email, password } = req.body;
        Controller.registerBusiness(req, res)
    })

export default router;