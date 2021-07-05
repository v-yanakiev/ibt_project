let db=require('./db');
async function newReview(text, product_id){
    db.query('insert into reviews (text, product_id) values ($1, $2)',[text,product_id]);
}
module.exports=newReview;