var express = require('express');
var router = express.Router();
let productsFunctionality=require('../dbModules/productsFunctionality');

/* GET home page. */
router.get('/', function(req, res, next) {
    productsFunctionality.getProductsFromDatabase().then(function(sqlRes,err){
        res.render('index', { phones:sqlRes.rows });
    });
});

module.exports = router;
