let db=require('./db');
async function newOrder(name,address,id){
    db.query('insert into orders (buyer_name, buyer_address,product_id) values ($1, $2,$3)',[name, address,id]);
}
module.exports=newOrder;