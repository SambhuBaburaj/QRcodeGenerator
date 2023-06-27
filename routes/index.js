var express = require('express');
var router = express.Router();
const qrCode = require('qrcode');
/* GET home page. */
router.get('/', function(req, res, next) {


  const text = req.query.url
  console.log(text);
  // const text = sms:+18324001597%26body=Hi%20Raj,%20I%20want%20to%20know%20more%20about%20investments.;
  qrCode.toDataURL(text, (err, qrCodeData) => {
    if (err) throw err;
    res.render('index', { qrCode: qrCodeData });
  });
  // res.render('index', { title: req.query.username });
});

module.exports = router;
