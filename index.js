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

app.use("/api/products", routeProducts);
// app.unsubscribe("/api/products", prodctRoute);


// // reading the data
// app.get("/api/products/", );

// // view by id 
// // reading the data
// // here modified path : products -> product
// app.get("/api/product/:id",);

// app.post("/api/products/",);

// // update a product 
// app.put("/api/product/:id", );

// // delete a product 

// app.delete("/api/product/:id", )


mongoose.connect("mongodb+srv://prachitidagale_db_user:basic_crud_app@backenddb.q1z3rtg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb").then(()=>{

    console.log("connection succcesssful.....")
}).catch(()=>{
    console.log("error in the connection.")
})