var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = {
    index(req, res){
        return res.status(200).send('respond with a resource');
    }
}
