const config = require('./DBConfig');
const mssql = require('mssql');

const getUserByControl = async ( control )  =>{
    
    try{

        await mssql.connect(config);
        let req = await mssql.query(`SELECT * FROM LaboratorioL5 WHERE no_de_control = '${control}'`);
        return req.recordset;
    }catch(e){
        console.log(e);
    }
}

const getAdminUser = async ( name, password ) => {
    
    try{

        await mssql.connect(config);
        let req = await mssql.query(`SELECT * FROM USERS WHERE name = '${name}' and password ='${password}'`);
        
        return req.recordset;
    
    }catch(e){

        console.log(e);
    }
}
module.exports = {
    getUserByControl,
    getAdminUser,
}