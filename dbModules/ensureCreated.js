let db=require('./db');
async function ensureCreated(){
    await db.query('select * from products').then(fillDBIfEmpty);
    async function fillDBIfEmpty(res,err){
        if(!res.rowCount){
            products=require('./getProducts')();
            for(product of products){
                let a=Array.from(Object.values(product));
                let query =`insert into products (${Object.keys(product).join(",")}) values ('${a[0]}', '${a[1]}', '${a[2]}', '${a[3]}')`;
                await db.query(query);
            }
        }
    }
}
module.exports=ensureCreated;