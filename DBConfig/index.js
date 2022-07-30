const config = require('./DBConfig');
const mssql = require('mssql');

const getAlumnByName = async ( nombre )  =>{
    
    try{

        let pool = await mssql.connect(config);
        let req = await pool.request().query(`SELECT * FROM LaboratorioL5 WHERE nombre_alumno = '${nombre}'`);
        return req.recordsets;
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    getAlumnByName,
}