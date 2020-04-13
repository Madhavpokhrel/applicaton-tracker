const express= require('express')
const PORT  = process.env.PORT||5000
const applicationRouter= require('./router/applicationRouter')
const app = express()
const mongoose = require('mongoose');
const path = require('path');

app.use(express.json())
app.use(applicationRouter)
app.use(express.static('build'));

app.get('*',*(req,res)=>{
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
})
mongoose.connect('mongodb://localhost/applicatondata',{useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology:true})
.then(()=>{
	console.log("mongodb connected successfull ")
})
.catch(err=>{
	console.log(err)
})



app.listen(PORT, ()=>{
    console.log('Server started on port on : ', PORT)
})
