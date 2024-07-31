import express from 'express';
import { createListing } from '../controllers/listing.conroller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create',verifyUser, createListing);

export default router;