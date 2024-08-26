

const express= require('express');
const { create, getById, allUser } = require('./model/user.model');

const app=express();


app.post('/', (req,res)=>{


    const user= req.body;

    const newUser= create(user)

    res.status(200).json({
        user:newUser
    })

})
app.get('/:id', (req,res)=>{


    const {id}= req.params;

    if(!id || id===""){
        return res.status(400).json({
            message:"provide id"
        })
    }
    const user= getById(id)

    res.status(200).json({
        user:user
    })

})


app.get('/', (req,res)=>{


  

    const users= allUser()

    res.status(200).json({
        user:users
    })

})

app.listen(3000,()=>{
    console.log("server listening om port", 3000);
    
})


