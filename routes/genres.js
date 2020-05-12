const express = require('express');
const Joi = require('joi');
const router = express.Router()
const genres=[{
  id:1,name:"jazz"
}]

router.get("/",(req,res)=>{
  res.send(genres)
})
 router.post("/",async(req,res)=>{
   const genre={
     id:genres.length + 1,
      name:req.body.name
    }
   if(!genre) return res.status(404).send(`the genre with the id: ${genre} was not find`)

   const schema={name:Joi.string().min(3).required()};
   const result=Joi.validate(req.body,schema);

   if(result.error) return res.status(404).send(result.error.details[0].message)

 await genres.push(genre)
res.send(genre)
 })

router.put("/:id",(req,res)=>{
  const genre=genres.find(c=>c.id===parseInt(req.params.id))
  if(!genre) return res.status(404).send(`the genre with the id: ${genre} was not find`)

  const schema={name:Joi.string().min(3).required()};
  const result=Joi.validate(req.body,schema);

  if(result.error) return res.status(404).send(result.error.details[0].message)
  genre.name=req.body.name;
  res.send(genre);
})

router.delete("/:id",(req,res)=>{
  const genre=genres.find(c=>c.id===parseInt(req.params.id))
  if(!genre) return res.status(404).send(`the genre with the id ${genre} was not find`)
  const index=genres.indexOf(genre)
  genres.splice(index,1)
  res.send(genre);
})











module.exports=router
