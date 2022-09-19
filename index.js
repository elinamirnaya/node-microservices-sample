const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const controller = require('./api/controller');

app.get('/', (_req, res) => {
    res.send('Welcome! Please navigate to /furniture or /distance/:zipcode1/:zipcode2 to get your data.');
});

app.get('/furniture', controller.getFurniture);

app.get('/distance/:zipcode1/:zipcode2', controller.getDistance);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});