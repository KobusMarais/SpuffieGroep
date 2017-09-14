var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var path = require('path');
    res.sendFile(path.resolve('./routes/index.html'));
});

module.exports = router;
