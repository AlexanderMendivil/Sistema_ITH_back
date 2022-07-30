const express = require("express")
const cors = require("cors")
const db = require('./DBConfig/index');

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

app.use('/', router);

router.use((req, res, next) => {
    next();
});


router.route('/alumn/:name').get(( req, res ) => {
     const { name } = req.params;
    db.getAlumnByName( name ).then( results => res.json( results ) ).catch(err => console.log(err));
});


// app.post("/", (req, res)=>{
//         let { data } = req.body;
//         if(data.toString().length > 4){
//             const student = infoStudent(data);
//             res.send(student)
            
//         }else{
//             const employee = infoEmployee(data)
//             res.send(employee)
//         }
//     })

// app.get("/", (req, res)=>{
//     const result = infoStudent("21331108");
//     res.send(result)
// })


app.listen(PORT, ()=>{
    console.log(`running: ${PORT}`)
});