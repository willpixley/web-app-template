import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import exampleRoutes from './routes/exampleRoutes.js';

dotenv.config();
const app = express();

// 5173 is the default Vite port
const FRONTEND_PORT = process.env.FRONTEND_PORT || 5173;
// Allows front end to access backend
app.use(
	cors({
		origin: `http://localhost:${FRONTEND_PORT}`,
		methods: ['POST', 'GET', 'PATCH'],
		credentials: true,
	})
);
app.use(express.json());

// Example API routes
app.use('/api/example', exampleRoutes);

export default app;
