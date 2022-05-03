const XLSX = require("xlsx");

function leerExcel( ruta ){
    const workbook = XLSX.readFile(ruta);
    const workbookSheet = workbook.SheetNames;
    
    const sheet = workbookSheet[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    console.log(dataExcel);
}
leerExcel("0_inscritos_detalle_ESCOLARES20221.xls");


