var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var openid = req.query.openid || "openid没传";
    res.render('index', { title: openid });
});

module.exports = router;
