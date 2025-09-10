const Product = require('./models/product.model.js');

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routeProducts = require("./routes/product.route.js")

// middlewares
app.use(express.json()); 
app.use(express.urlencoded({extended:false}))


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});

app.get('/', (req,res)=>{
    res.send("Hello from Node");
});

// routes for ('/app/products/)
app.use("/api/products", routeProducts);



mongoose.connect("mongodb+srv://<username>:<password>backenddb.q1z3rtg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb").then(()=>{

    console.log("connection succcesssful.....")
}).catch(()=>{
    console.log("error in the connection.")
})
