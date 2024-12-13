import express from 'express';
import {AuthController} from '../controller/Auth.controller.js';
import UserController from '../controller/User.controller.js';

const router = express.Router();

router.post('/login', AuthController.prototype.login);
router.post('/update', UserController.updateInfo);
router.get('/:id', UserController.getUserInfo);

export default router;