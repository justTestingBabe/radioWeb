const express= require('express')

const app =express()

app.get('/',(req,res)=>{
    res.sendFile('home.html',{root:__dirname})
})

app.listen(5000,()=>{console.log('Listening at port 5000')})
