const io = require("socket.io")(process.env.PORT || 3000,{
    cors:{
        origin: false
    }
});

io.on("connection", socket =>{

    socket.on("send-num_control", (numero_control) =>{
        
    })
})