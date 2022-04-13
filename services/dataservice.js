const db=require('./db')

const search=(Name)=>{
return db.Stock.findOne({
    Name
})
.then(stock => {
    if (stock) {
      return {
        statusCode: 200,
        status: true,
        message: stock.Name
      }
    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Unable to fetch data"
      }
    }
  })
}




























module.exports={
search
}