const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {

    this.on('top_10_rows', async () => {
        try {
            let dbQuery = ' Call "top_10_rows"( )';
            let result = await cds.run(dbQuery, {});
            console.log(result);
            return true;
        } catch (error) {
            console.error(error)
            return false
        }
    })
})


// const cds = require('@sap/cds')
// module.exports = cds.service.impl(async (srv) => {
//     const db = await cds.connect.to("db");
//     const { Products } = cds.entities('product.details');
//     srv.on("top_10_rows", async () => {
//         var list = await srv.run(SELECT.from(Products));

//         let query=' Call "top_10_rows"()';
//         result = await srv.run(query,{});
//         console.log(result);
//         return list;
//     })
// })


