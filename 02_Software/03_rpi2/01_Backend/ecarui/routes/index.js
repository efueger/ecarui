var express = require('express');
var router = express.Router();
var fs = require('fs');
var mapsAPIKey = fs.readFileSync("lt_mapsapikey"); // is in .gitignore

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', key: mapsAPIKey });
});

module.exports = router;
