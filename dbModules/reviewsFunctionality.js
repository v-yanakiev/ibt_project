module.exports= {
  db:require('./db'),
  async newReview(text, product_id){
    this.db.query('insert into reviews (text, product_id) values ($1, $2)',[text,product_id]);
  },
  async getReviews(product_id){
    return this.db.query('select * from reviews where product_id = $1',[product_id]);
  }
}