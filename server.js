import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/expenseRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors()); // Use cors to allow cross-origin requests
// Routes
app.use('/expenses', router);
app.use('/income', userRouter);

mongoose.connect('mongodb://localhost:27017/finlogger')

 .then(() => console.log('Connected to MongoDB'))

 .catch(error => console.error('Error connecting to MongoDB:', error));

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3001;

 app.listen(PORT, () => {

 console.log(`Server is listening on port '${PORT}'`);

 });


