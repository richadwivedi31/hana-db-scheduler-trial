const cds = require('@sap/cds')
const hdbext = require("@sap/hdbext")
const dbClass = require("sap-hdbext-promisfied")
module.exports = cds.service.impl(function () {

    this.on('top_10_rows', async () => {
        try {
            const db = await cds.connect.to('db')

            // using @sap/hdbext module to call the Stored Procedure from HANA.
            let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials))
            const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'top_10_rows')
            const output = await dbConn.callProcedurePromisified(sp, [])
            console.log(output.results)
            return output.results
        } catch (error) {
            console.error(error);
            return [];
        }
    })

})



