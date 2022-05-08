const XLSX = require("xlsx");

const readExcelStudent = ( ruta ) => {
    const workbook = XLSX.readFile(ruta);
    const workbookSheet = workbook.SheetNames;
    
    const sheet = workbookSheet[0];
    const dataExcelStudent = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    return dataExcelStudent;
}

export const infoStudent = (badgeNumber) => {
    const infoStudents = readExcelStudent("0_inscritos_detalle_ESCOLARES20221.xls");

    const info = search(infoStudents, infoStudents.length, badgeNumber)
    return info;
}

export const infoEmployee = (badgeNumber) => {
    const infoEmployees = readExcelStudent("Personal-tarjeta20221.xls");

    const info = search(infoEmployees, infoEmployees.length, badgeNumber)
    return info;
}

const search = (arr, len, value) => {

    if (arr[len - 1].no_de_control == value)
            return arr[i];
    
        let backup = arr[len - 1];
        arr[len - 1].no_de_control = value;
        for (let i = 0;; i++) {
                
            if (arr[i] == value) {
                    
                arr[len - 1].no_de_control = backup;
    
                if (i < len - 1)
                    return arr[i];
    
                return "Not Found";
            }

        }
}
