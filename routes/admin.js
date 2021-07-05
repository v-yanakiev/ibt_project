var express = require('express');
var router = express.Router();
let getProductsFromDatabase=require('../dbModules/getProductsFromDatabase');
let getOrdersForProduct=require('../dbModules/getOrdersForProduct');
/* GET home page. */
router.get('/', function(req, res, next) {
    let phones={};
    getProductsFromDatabase().then(function(sqlRes,err){
        phones=sqlRes.rows;
    }).then(async ()=>{
        for(let phone of phones){
            phone.orders=(await getOrdersForProduct(phone.id)).rows;
        }
    }).then(()=>{
        res.render('admin',  {phones:phones});
    });

});

module.exports = router;
