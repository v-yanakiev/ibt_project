var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let getProductsFromDatabase=require('../dbModules/getProductsFromDatabase');
    getProductsFromDatabase().then(function(sqlRes,err){
        res.render('index', { phones:sqlRes.rows });
    });
});

module.exports = router;
