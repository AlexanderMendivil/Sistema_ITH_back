const express = require("express")
const cors = require("cors")
const db = require('./DBConfig/index');

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);

router.use((req, res, next) => {
    next();
});


router.route('/alumn/:control').get(( req, res ) => {
     const { control } = req.params;
    db.getUserByControl( control ).then( results => res.send( results ) ).catch(err => console.log(err));
});

router.route('/auth').post(( req, res ) => {
     const { name, password } = req.body;
    db.getAdminUser(name, password).then( results => {

        if(results.length === 0 ){
            res.send({"Error": "Nombre o contraseña incorrectos"})
        }else{
            res.send(results);
        }
    });
});


app.listen(PORT, ()=>{
    console.log(`running: ${PORT}`)
});