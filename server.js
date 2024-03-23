// app.js
const express = require('express');
var geo = require('geoip-lite');
const app = express();
const router = express.Router();

router.get('/someroute', (req,res) => {
  const ips = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let arr = ips.split(", ");
  res.json({
    country:geo.lookup(arr[0])
  })
});

app.use('/', router);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
