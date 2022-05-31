import express from 'express';
// Take in incoming POST request body
import bodyParser from 'body-parser';

// app: The whole application
const app = express();
const PORT = 5000;
// Use json data in the whole application
app.use(bodyParser.json());

app.get('/', (req, res) => {res.send('Hello from Homepage')});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
