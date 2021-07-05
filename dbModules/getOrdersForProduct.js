let db=require('./db');
async function getOrders(product_id){
    return db.query('select * from orders where product_id = $1',[product_id]);
}
module.exports=getOrders;