const Joi = require('joi');
const genres=require("./routes/genres")
const homepage=require("./routes/homepage")
const express = require('express');
const morgan = require('morgan')
const app=express();
const port=process.env.PORT||3000;

app.set("view engine","pug");
app.set("views","./views");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/api/genres",genres);
app.use("/",homepage)

if(app.get("env")==="development"){
  app.use(morgan("tiny"))
  console.log("morgan enable");
}












app.listen(port,()=>{
  console.log(`app is run on port ${port}`);
})
