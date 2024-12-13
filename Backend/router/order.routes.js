import express from 'express';
import OrderController from '../controller/Order.controller.js';

const router = express.Router();

router.get("/", OrderController.getCurrentCart);

export default router;