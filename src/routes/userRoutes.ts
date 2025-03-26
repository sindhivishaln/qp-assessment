import { Router } from 'express';
import { getAvailableGroceries, placeOrder } from '../controllers/userController';

const router = Router();

router.get('/groceries', getAvailableGroceries);
router.post('/order', placeOrder);

export default router;
