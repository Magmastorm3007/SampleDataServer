const mongoose=require('mongoose')
const sampledata={
    
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String,
    "income": String,
    "city": String,
    "car": String,
    "quote": String,
    "phone_price": String
  }
  
const data=mongoose.model("assignment",sampledata)
module.exports=data


