import express from 'express';
import OrderController from '../controller/Order.controller';

const router = express.Router();

router.get("/", OrderController.getCurrentCart);

export default router;