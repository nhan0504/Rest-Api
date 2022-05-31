import express from "express";
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    // Create a new user with Id
    const userWithId = {...user, id: uuidv4()};
    users.push(userWithId);

    res.send("New user was added to database");
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)

    res.send(`User with id ${id} was deleted`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const foundUser = users.find((user) => user.id === id);

    if (firstName) foundUser.firstName = firstName;
    if (lastName) foundUser.lasttName = lasttName;
    if (age) foundUser.age = age;
    
    res.send(`User with the id ${id} has been updated`);
});

export default router;