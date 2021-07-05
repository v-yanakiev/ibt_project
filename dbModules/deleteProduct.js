let db=require('./db');
async function deleteProduct(id){
    db.query('delete from products where id = $1',[id]);
}
module.exports=deleteProduct;