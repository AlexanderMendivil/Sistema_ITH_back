const { infoStudent } = require("./Excel_Handle/ExcelHandling")
const { infoEmployee } = require("./Excel_Handle/ExcelHandling")

const PORT = process.env.PORT || 3000;

const io = require("socket.io")(PORT,{
    cors:{
        origin: false
    }
});

io.on("connection", socket =>{

    socket.on("send-num_control", (badgeNumber) =>{
        
        if(badgeNumber.toString().length > 4){
            const resultInfoStudent = infoStudent(badgeNumber);
            socket.broadcast.emit("info-alumno", resultInfoStudent);
        }else{
            const resultInfoEmployee = infoEmployee(badgeNumber);
            socket.broadcast.emit("info-empleado", resultInfoEmployee);

        }

    })
})

console.log(`Server running in port:${PORT}`)