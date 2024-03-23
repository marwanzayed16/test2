const axios = require('axios');

async function getCountryFromIP(req, res, next) {
    try {
        const response = await axios.get(`https://ipinfo.io/country`);
        req.country = response.data;
        next();
    } catch (error) {
        console.error('Error fetching country:', error.message);
        req.country = 'Unknown';
        next();
    }
}

module.exports = getCountryFromIP;
