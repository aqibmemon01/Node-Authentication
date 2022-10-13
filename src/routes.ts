
import AuthRoutes from './features/auth/routes/index';
import express from 'express';
const router = express.Router();

router.use('/auth/api', AuthRoutes);

export default router;