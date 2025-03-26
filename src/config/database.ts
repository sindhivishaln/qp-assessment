import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Admin } from '../models/Admin';
import { GroceryItem } from '../models/GroceryItem';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [User, Admin, GroceryItem, Order, OrderItem],
  logging: false,
});
