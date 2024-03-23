// app.js
const express = require('express');
var geo = require('geoip-lite');
const app = express();
const router = express.Router();

router.get('/someroute', (req,res) => {
  const ips = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let result = [];
  let arr = ips.split(", ");
  arr.map((ip) => {
    result.push({
        ip,
        country:geo.lookup(ip)
    })
  })
  res.json({
    result
  })
});

app.use('/', router);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
