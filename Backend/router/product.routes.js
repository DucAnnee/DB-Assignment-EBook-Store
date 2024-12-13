import express from 'express';
import ProductController from '../controller/Product.controller.js';


const router = express.Router();

router.get("/:id", ProductController.getById);
// router.get("/search/:query")

export default router;