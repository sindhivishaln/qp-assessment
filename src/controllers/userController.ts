import { Request, Response } from 'express';
import { GroceryItem } from '../models/GroceryItem';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';
import { Op } from 'sequelize';

// Get all available grocery items (stock > 0)
export const getAvailableGroceries = async (_req: any, res: any) => {
  try {
    const groceries = await GroceryItem.findAll({
      where: { stock: { [Op.gt]: 0 } },
    });
    return res.status(200).json(groceries);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch groceries' });
  }
};

// Place an order
export const placeOrder = async (req: any, res: any) => {
  const { userId, items } = req.body; // items = [{ groceryItemId, quantity }]
  try {
    const order = await Order.create({ userId });

    for (const item of items) {
      const grocery = await GroceryItem.findByPk(item.groceryItemId);
      if (!grocery || grocery.stock < item.quantity) {
        return res.status(400).json({ error: `Insufficient stock for item ${item.groceryItemId}` });
      }
      await grocery.update({ stock: grocery.stock - item.quantity });
      await OrderItem.create({
        orderId: order.id,
        groceryItemId: item.groceryItemId,
        quantity: item.quantity,
        price: grocery.price * item.quantity,
      });
    }

    return res.status(201).json({ message: 'Order placed successfully', orderId: order.id });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to place order' });
  }
};
