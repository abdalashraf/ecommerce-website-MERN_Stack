const moongoose = require("mongoose");


moongoose.connect("mongodb+srv://ali:ali12345@cluster0.oil18sj.mongodb.net/?retryWrites=true&w=majority")
const productSchema= new moongoose.Schema({
    name:{
        type:String,
    },
    Details:{
        type:String,
    }, 
    Category:{
        type:String,
    }, 
    price:{
        type:Number,
    },
   
    file:{
        type:String,
    }, 
})

const orderSchema= new moongoose.Schema({
    Name:{
        type:String,
    },
    address:{
        type:String,
    }, 
    email:{
        type:String,
    }, 
    number:{
        type:Number,
    },
})

const  Product =  moongoose.model("Product", productSchema)
const  Order =  moongoose.model("Order", orderSchema)


module.exports = { Product, Order };
