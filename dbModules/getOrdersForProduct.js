let db=require('./db');
async function getOrders(product_id){
    return db.query('select * from reviews where id = $1',[product_id]);
}
module.exports=getOrders;