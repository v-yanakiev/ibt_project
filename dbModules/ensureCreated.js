let db=require('./db');
async function ensureCreated(){
    await db.query('select * from products').then(fillDBIfEmpty);
    async function fillDBIfEmpty(res,err){
        if(!res.rowCount){
            products=require('./getInitialProducts')();
            for(product of products){
                let keys=Object.keys(product);
                let query =`insert into products (${keys.join(",")}) values ('${product[keys[0]]}', '${product[keys[1]]}', '${product[keys[2]]}', '${product[keys[3]]}', '${product[keys[4]]}')`;
                await db.query(query);
            }
        }
    }
}
module.exports=ensureCreated;