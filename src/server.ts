import app from './app';
import dotenv from 'dotenv';
import { sequelize } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced');
  });
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
