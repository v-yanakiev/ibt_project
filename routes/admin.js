var express = require('express');
var router = express.Router();
let ordersFunctionality=require('../dbModules/ordersFunctionality');
let productsFunctionality=require('../dbModules/productsFunctionality');
/* GET home page. */
router.get('/', function(req, res, next) {
    let phones={};
    productsFunctionality.getProductsFromDatabase().then(function(sqlRes,err){
        phones=sqlRes.rows;
    }).then(async ()=>{
        for(let phone of phones){
            phone.orders=(await ordersFunctionality.getOrders(phone.id)).rows;
        }
    }).then(()=>{
        res.render('admin/index',  {phones:phones});
    });

});
router.get('/delete/:id',function(req,res,next){
    productsFunctionality.deleteProduct(req.params.id).then(()=>{
        res.redirect('/admin');
    });
});
router.post('/create/',function(req,res,next){
    let price=Number(req.body.productPrice);
    if(price===NaN){
        res.redirect('/admin');
    }
    productsFunctionality.createProduct(req.body.productName,req.body.productShortDesc,req.body.productLongDesc,
        price,req.body.productImageUrl).then(()=>{
        res.redirect('/admin');
    });
});
router.get('/edit/:id',function(req,res,next){
    productsFunctionality.getProduct(req.params.id).then((sqlRes,err)=>{
        res.render('admin/edit',  sqlRes.rows[0]);
    });
});
router.post('/edit/:id',function(req,res,next){
    let price=Number(req.body.productPrice);
    if(price===NaN){
        res.redirect('/admin');
    }
    productsFunctionality.editProduct(req.body.productName,req.body.productShortDesc,req.body.productLongDesc,
        price,req.body.productImageUrl,req.params.id).then(()=>{
        res.redirect('/admin');
    });
});
module.exports = router;
