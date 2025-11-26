var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', function(req, res, next) {
  res.send('Hello World!')
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'My Home' });
});

router.post('/post', function(req, res, next) {
  res.send('Hello World!')
});

module.exports = router;
