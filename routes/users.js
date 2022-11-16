var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      name: 'Jack',
      age: 13
    },
    {
      name: 'Alice',
      age: 15
    }
  ])
});

module.exports = router;
