var express = require('express');
var router = express.Router();

/* GET videos page. */
router.get('/', function(req, res, next) {
  res.render('kiddie');
});

module.exports = router;
