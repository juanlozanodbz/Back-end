const express = require("express")
const mongoose = require("mongoose")
const movieRoutes = require("./routes/movies")
const app = express()
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use("/movie", movieRoutes)

// URI => user:password@IP:port/db_name?authSource=db_usuarios
mongoose.connect('mongodb://user8:root@54.227.9.233:27017/base8?authSource=admin')
    .then(()=>{
        app.listen(8080, ()=>console.log("Server online"))
    })
    .catch(err=>console.log(err))