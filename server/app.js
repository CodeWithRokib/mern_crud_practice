import express from 'express';
import userRoute from './src/routes/userRoute.js';
import productRoute from './src/routes/productRoute.js'
const app = express();

app.use(express.json());

app.use('/api/v1',userRoute);
app.use('/api/v1',productRoute);

export default app;