let db=require('./db');
async function getProductsFromDatabase(){
    return db.query('select * from products');
}
module.exports=getProductsFromDatabase;