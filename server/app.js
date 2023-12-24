import express from 'express';
import userRoutes from './src/routes/userRoute.js';
import productRoutes from './src/routes/productRoute.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',userRoutes);
app.use('/api/v1',productRoutes);


export default app;