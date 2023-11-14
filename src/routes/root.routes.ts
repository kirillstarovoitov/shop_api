import express from 'express';
import RootController from '../controllers/root.controller'

const router = express.Router();

router
    .route('/')
    .get(RootController.getInitialData)


export default router