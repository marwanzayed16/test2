// app.js
const express = require('express');
var geo = require('geoip-lite');
const app = express();
const router = express.Router();

router.get('/someroute', (req,res) => {
  const ips = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let arr = ips.split(", ");
  console.log(geo.lookup(arr[0]));
  res.send(`Your Country is ${geo.lookup(arr[0]).country}`)
});

app.use('/', router);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
