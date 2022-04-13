const express=require('express')

const dataService=require('./services/dataservice')

const cors=require('cors')


const app=express()

app.use(cors({
    origin:'http://localhost:4200'
}))


//to parse json
app.use(express.json())






app.post('/search',(req,res)=>{
    //asynchronous
    //asynchronous cannot be defined into a constant
   dataService.search(req.body.Name)  
.then(result=>{
    res.status(result.statusCode).json(result)
})
    })

























app.listen(3000,()=>{
    console.log("server started at port no: 3000");
})