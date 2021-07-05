let db=require('./db');
async function getReviews(product_id){
    return db.query('select * from reviews where product_id = $1',[product_id]);
}
module.exports=getReviews;