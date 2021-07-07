module.exports= {
  db:require('./db'),
  async createProduct(name,short_description,long_description,price,image_url){
    this.db.query('insert into products (name, short_description, long_description, price, image_url) values ($1, $2, $3, $4, $5)',
      [name,short_description,long_description,price,image_url]);
  },
  async deleteProduct(id){
    this.db.query('delete from products where id = $1',[id]);
  },
  async editProduct(name,short_description,long_description,price,image_url,id){
    this.db.query('update products set name=$1, short_description=$2, long_description=$3, price=$4, image_url=$5 where id=$6',
      [name,short_description,long_description,price,image_url,id]);
  },
  async getProduct(id){
    return this.db.query('select * from products where id = $1',[id]);
  },
  async getProductsFromDatabase(){
    return this.db.query('select * from products');
  }
}