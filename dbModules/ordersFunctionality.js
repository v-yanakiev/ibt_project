module.exports= {
  db:require('./db'),
  async newOrder(name,address,id){
    this.db.query('insert into orders (buyer_name, buyer_address,product_id) values ($1, $2,$3)',[name, address,id]);
  },
  async getOrders(product_id){
    return this.db.query('select * from orders where product_id = $1',[product_id]);
  }
}