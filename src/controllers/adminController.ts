import { Request, Response } from 'express';
import { GroceryItem } from '../models/GroceryItem';

// Add new grocery item
export const addGroceryItem = async (req: any, res: any) => {
  const { name, price, description, stock } = req.body;
  try {
    const item = await GroceryItem.create({ name, price, description, stock });
    return res.status(201).json(item);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to add grocery item' });
  }
};

// Update grocery item details
export const updateGroceryItem = async (req: any, res: any) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  try {
    const item = await GroceryItem.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    await item.update({ name, price, description });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update item' });
  }
};

// Delete grocery item
export const deleteGroceryItem = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const item = await GroceryItem.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    await item.destroy();
    return res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete item' });
  }
};

// View all grocery items
export const getAllGroceryItems = async (_req: any, res: any) => {
  try {
    const items = await GroceryItem.findAll();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch items' });
  }
};

// Update inventory (stock)
export const updateInventory = async (req: any, res: any) => {
  const { id } = req.params;
  const { stock } = req.body;
  try {
    const item = await GroceryItem.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    await item.update({ stock });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update stock' });
  }
};
