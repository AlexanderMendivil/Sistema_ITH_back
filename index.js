const { infoStudent } = require("./Excel_Handle/ExcelHandling")
const { infoEmployee } = require("./Excel_Handle/ExcelHandling")

const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 3000;
const app = express()

app.use(cors());
app.use(express.json());

app.post("/", (req, res)=>{
        let { data } = req.body;
        if(data.toString().length > 4){
            const student = infoStudent(data);
            res.send(student)
            
        }else{
            const employee = infoEmployee(data)
            res.send(employee)
        }
    })

app.get("/", (req, res)=>{
    const result = infoStudent("21331108");
    res.send(result)
})


app.listen(PORT, ()=>{
    console.log(`running: ${PORT}`)
});