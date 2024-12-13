import express from "express";
import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";

const router = express.Router();


router.use("/authentication", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", )
// router.use("/printorder", printorderRoutes);
// router.use("/pageorder",pageorderRoutes);
// router.use("/Student",StudentRoutes);

export default router;