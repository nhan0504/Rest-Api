import express from "express";
import { getUser, createUser, getUserByID, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserByID);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;