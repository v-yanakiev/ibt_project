var express = require('express');
var router = express.Router();
let ordersFunctionality=require('../dbModules/ordersFunctionality');
let productsFunctionality=require('../dbModules/productsFunctionality');
let reviewsFunctionality=require('../dbModules/reviewsFunctionality');

router.get('/:id', function(req, res, next) {
    let responseObject={};
    productsFunctionality.getProduct(req.params.id).then(handleProduct).
        then(()=>reviewsFunctionality.getReviews(req.params.id)).then(handleReviews).
        then(()=>res.render("product",responseObject));
    function handleProduct(req,res){
        responseObject.product=req.rows[0];
    }
    function handleReviews(req,res){
        responseObject.reviews=req.rows;
    }
});
router.post('/newReview/:id', function(req, res, next) {
    reviewsFunctionality.newReview(req.body.review,req.params.id).then(
        (sqlRes,err)=>res.redirect('/product/'+req.params.id)
    );
});
router.post('/newOrder/:id', function(req, res, next) {
    let responseObject={successMessage:`${req.body.name}, благодарим ви за поръчката!`};

    ordersFunctionality.newOrder(req.body.name,req.body.address,req.params.id).then(
        (sqlRes,err)=>
        {
            productsFunctionality.getProduct(req.params.id).then(handleProduct).
                then(()=>reviewsFunctionality.getReviews(req.params.id)).then(handleReviews).
                then(()=>res.render("product",responseObject));
        }    
    );
    function handleProduct(req,res){
        responseObject.product=req.rows[0];
    }
    function handleReviews(req,res){
        responseObject.reviews=req.rows;
    }
});

module.exports = router;
