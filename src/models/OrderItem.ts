import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from './Order';
import { GroceryItem } from './GroceryItem';

@Table
export class OrderItem extends Model {
  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER, allowNull: false })
  orderId!: number;

  @ForeignKey(() => GroceryItem)
  @Column({ type: DataType.INTEGER, allowNull: false })
  groceryItemId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity!: number;

  @BelongsTo(() => Order)
  order!: Order;

  @BelongsTo(() => GroceryItem)
  groceryItem!: GroceryItem;
}
