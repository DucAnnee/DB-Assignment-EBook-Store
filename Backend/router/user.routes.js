import express from 'express';
import AuthController from '../controller/Auth.controller.js';
import UserController from '../controller/User.controller.js';

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/:id', UserController.getUserInfo);
router.post('/:id', UserController.updateInfo);
router.get('/:id/address', UserController.getUserAddress);

export default router;