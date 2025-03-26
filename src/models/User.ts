import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Order } from './Order';

@Table
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @HasMany(() => Order)
  orders!: Order[];
}
