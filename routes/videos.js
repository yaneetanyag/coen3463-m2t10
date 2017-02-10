var express = require('express');
var router = express.Router();

/* GET portaits page. */
router.get('/', function(req, res, next) {
  res.render('videos');
});

module.exports = router;
