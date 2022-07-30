const config = require('./DBConfig');
const mssql = require('mssql');


const getAllUsers = async () =>{
    try{
        await mssql.connect(config);
        let req = await mssql.query(`SELECT * FROM LaboratorioL5`);
        return req.recordset;
    }catch(e){
        console.log(e);
    }
}

const getUserByControl = async ( control )  =>{
    
    try{

        await mssql.connect(config);
        let req = await mssql.query(`SELECT * FROM LaboratorioL5 WHERE no_de_control = '${control}'`);
        return req.recordset;
    }catch(e){
        console.log(e);
    }
}

const getLogin = async ( name, password ) => {
    
    try{

        await mssql.connect(config);
        let req = await mssql.query(`SELECT * FROM USERS WHERE name = '${name}' and password ='${password}'`);
        
        return req.recordset;
    
    }catch(e){

        console.log(e);
    }
}
module.exports = {
    getAllUsers,
    getUserByControl,
    getLogin,
}