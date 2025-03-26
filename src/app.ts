import express from 'express';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.get('/', (_req, res) => {
  res.send('Grocery Booking API with Sequelize');
});

export default app;
