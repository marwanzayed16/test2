// countryMiddleware.js
const axios = require('axios');

async function getCountryFromIP(req, res, next) {
    try {
        // Get client IP address from request object

        // Make a request to ipinfo.io to get country information based on the IP address
        const response = await axios.get(`http://ip-api.com/json/`);

        // Extract country from the response data
        req.country = response.data.country;
        next();
    } catch (error) {
        console.error('Error fetching country:', error.message);
        req.country = 'Unknown';
        next();
    }
}

module.exports = getCountryFromIP;
