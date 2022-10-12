const express = require("express")
const cors = require("cors")
const { getAllUsers, getRegisteredUsers, getLogin, getUserByControl } = require('./DBConfig/index')

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

router.route('/users').get( async ( req, res ) => {
    try{
         let results = await getAllUsers();
         res.send( results );
    }catch(err){
         console.log(err)
    }
});

router.route('/records').get( async ( req, res ) => {
    try{
         let results = await getRegisteredUsers();
         res.send( results );
    }catch(err){
         console.log(err)
    }
});

router.route('/user/:control').get( async ( req, res ) => {
     
    const { control } = req.params;

     try{
         let results = await getUserByControl( control );
         res.send( results )
    }catch(err){
         console.log(err)
    }

});

router.route('/auth').post( async ( req, res ) => {

     const { name, password } = req.body;

     try{

        let results = await getLogin(name, password)
     
        if(results.length === 0 ){
            res.send({"Error": "Nombre o contraseña incorrectos"})
        }else{
            res.send(results);
        }

    }catch(err){
        console.log(err);
    }
});

app.listen(PORT, ()=>{
    console.log(`Running server at http://localhost:${PORT}`)
});