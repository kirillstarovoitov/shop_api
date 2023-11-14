import express from 'express';
import AuthController from '../controllers/auth.controller'

const router = express.Router();

router
    .route('/login')
    .post(AuthController.logIn)

router
    .route('/sign-up')
    .post(AuthController.signUp)

export default router