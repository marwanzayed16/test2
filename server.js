// app.js
const express = require('express');
const getCountryFromIP = require('./countryMiddleware');
const app = express();

// Use custom middleware to get country based on IP address
app.use(getCountryFromIP);

app.get('/', (req, res) => {
    const country = req.country ? req.country : 'Unknown';
    res.send(`Your country is: ${country}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
