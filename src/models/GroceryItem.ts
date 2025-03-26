import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { OrderItem } from './OrderItem';

@Table
export class GroceryItem extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
    name!: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price!: number;

  @Column({ type: DataType.STRING })
  description?: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  stock!: number;

  @HasMany(() => OrderItem)
  orderItems!: OrderItem[];
}
