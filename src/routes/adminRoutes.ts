import { Router } from 'express';
import {
  addGroceryItem,
  updateGroceryItem,
  deleteGroceryItem,
  getAllGroceryItems,
  updateInventory,
} from '../controllers/adminController';

const router = Router();

router.post('/grocery', addGroceryItem);
router.put('/grocery/:id', updateGroceryItem);
router.delete('/grocery/:id', deleteGroceryItem);
router.get('/groceries', getAllGroceryItems);
router.put('/grocery/:id/inventory', updateInventory);

export default router;
