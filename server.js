const express= require('express')
const PORT  = process.env.PORT||5000
const applicationRouter= require('./router/applicationRouter')
const app = express()
const mongoose = require('mongoose')




app.use(express.json())
app.use(applicationRouter)


mongoose.connect('mongodb://localhost/applicatondb',{useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology:true})
.then(()=>{
	console.log("mongodb connected successfull ")
})
.catch(err=>{
	console.log(err)
})



app.listen(PORT, ()=>{
    console.log('Server started on port on : ', PORT)
})





