import express from 'express';
import { registrationController } from '../controllers/userController.js';


const router = express.Router();


router.get('/rokib',registrationController);

export default router;
