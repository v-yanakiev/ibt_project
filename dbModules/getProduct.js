let db=require('./db');
async function getProduct(id){
    return db.query('select * from products where id = $1',[id]);
}
module.exports=getProduct;