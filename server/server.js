// Budget API

const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

const budget = require('./data.json');

app.use(cors());

app.get('/budget', (_, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
