//db.js - to give mongo db connection details

//mongoose import
const mongoose=require('mongoose')

//state connection string
mongoose.connect('mongodb://localhost:27017/riafy',{
    useNewUrlParser:true
})

//model creation- model's name should be in singular and initial letter should be in capital letter
const Stock=mongoose.model('Stock',{
        Name:String,
        currentmarketprice:String,
        marketcap:String,
        stockpe:String,
        dividendyield:String,
        roce:String,
        roe:String,
        debttoequity:String,
        eps:String,
        reserves :String,
        debt:String,
        s:{}
})


//export model ie User
module.exports={
    Stock
}
