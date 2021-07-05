var express = require('express');
var router = express.Router();
let getProductsFromDatabase=require('../dbModules/getProductsFromDatabase');

/* GET home page. */
router.get('/', function(req, res, next) {
    getProductsFromDatabase().then(function(sqlRes,err){
        res.render('index', { phones:sqlRes.rows });
    });
});

module.exports = router;
