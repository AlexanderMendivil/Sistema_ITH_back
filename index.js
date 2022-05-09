const { infoStudent } = require("./Excel_Handle/ExcelHandling")
const { infoEmployee } = require("./Excel_Handle/ExcelHandling")

const PORT = process.env.PORT || 3000;

const io = require("socket.io")(PORT,{
    cors:{
        origin: false
    }
});

io.on("connection", socket =>{

    socket.on("message", (badgeNumber) =>{
        console.log(badgeNumber);

        if(badgeNumber.toString().length > 4){
            const resultInfoStudent = infoStudent(badgeNumber);
            io.emit("message",resultInfoStudent);
        }else{
            const resultInfoEmployee = infoEmployee(badgeNumber);
            io.emit("message",resultInfoEmployee);

        }

    })
})

console.log(`Server running in port:${PORT}`)