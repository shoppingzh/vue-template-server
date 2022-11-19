var express = require('express');
var { success, failed } = require('../result');
var router = express.Router();
var Mock = require('mockjs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (Math.random() > 0.8) {
    res.json(success(Mock.mock({
      'array|1-50': [{
        'name': '@name',
        'age|1-100': 100
      }]
    }).array))
  } else {
    res.json(failed(200, '未知原因'))
  }
});

module.exports = router;
