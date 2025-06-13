import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import emailRoutes from './routes/email.js';


const app = express();
app.use(express.json());
app.use('/email', emailRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
