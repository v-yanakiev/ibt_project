var express = require('express');
var router = express.Router();
var getProduct=require('../dbModules/getProduct');
var newOrder=require('../dbModules/newOrder');
var newReview=require('../dbModules/newReview');
var getReviewsForProduct=require('../dbModules/getReviewsForProduct');

router.get('/:id', function(req, res, next) {
    let responseObject={};
    getProduct(req.params.id).then(handleProduct).
        then(()=>getReviewsForProduct(req.params.id)).then(handleReviews).
        then(()=>res.render("product",responseObject));
    function handleProduct(req,res){
        responseObject.product=req.rows[0];
    }
    function handleReviews(req,res){
        responseObject.reviews=req.rows;
    }
});
router.post('/newReview/:id', function(req, res, next) {
    newReview(req.body.review,req.params.id).then(
        (sqlRes,err)=>res.redirect('/product/'+req.params.id)
    );
});
router.post('/newOrder/:id', function(req, res, next) {
    newOrder(req.body.name,req.body.address,req.params.id).then(
        (sqlRes,err)=>res.redirect('/product/'+req.params.id)
    );
});
module.exports = router;
