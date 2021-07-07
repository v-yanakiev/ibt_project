let db=require('./db');
async function editProduct(name,short_description,long_description,price,image_url,id){
    db.query('update products set name=$1, short_description=$2, long_description=$3, price=$4, image_url=$5 where id=$6',
      [name,short_description,long_description,price,image_url,id]);
}
module.exports=editProduct;