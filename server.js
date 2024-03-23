// app.js
const express = require('express');
var geo = require('geoip-lite');
const app = express();
const router = express.Router();

router.get('/someroute', (req,res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({
    ip,
    country:geo.lookup(req.ip)
  })
});

app.use('/', router);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
