import express from "express";
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;
    // Create a new user with Id
    const userWithId = {...user, id: uuidv4()};
    users.push(userWithId);
    res.send("New user was added to database");
});

export default router;