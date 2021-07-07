let db=require('./db');
async function deleteProduct(name,short_description,long_description,price,image_url){
    db.query('insert into products (name, short_description, long_description, price, image_url) values ($1, $2, $3, $4, $5)',
      [name,short_description,long_description,price,image_url]);
}
module.exports=deleteProduct;