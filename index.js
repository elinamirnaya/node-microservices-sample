const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const controller = require('./api/controller');

app.get('/', (_req, res) => {
    res.send('Welcome! Please navigate to /furniture to get your data.');
});

app.get('/furniture', controller.getFurniture);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});