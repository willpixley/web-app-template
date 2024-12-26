import express from 'express';
import { test } from '../controllers/exampleController.js';

const router = express.Router();

// GET /api/example/test
router.get('/test', test);

export default router;
