import express from 'express';
import { test, updatedUser, deleteUser, getUserListings, getUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)

router.post('/update/:id', verifyUser, updatedUser)

router.delete('/delete/:id',verifyUser, deleteUser)

router.get('/listings/:id', verifyUser, getUserListings);

router.get('/:id', verifyUser, getUser);

export default router;
