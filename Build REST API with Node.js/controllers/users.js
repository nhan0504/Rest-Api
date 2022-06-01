import {v4 as uuidv4} from 'uuid';

let users = [];

export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    // Create a new user with Id
    const userWithId = {...user, id: uuidv4()};
    users.push(userWithId);

    res.send("New user was added to database");
}

export const getUserByID = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)

    res.send(`User with id ${id} was deleted`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const foundUser = users.find((user) => user.id === id);

    if (firstName) foundUser.firstName = firstName;
    if (lastName) foundUser.lasttName = lasttName;
    if (age) foundUser.age = age;
    
    res.send(`User with the id ${id} has been updated`);
}