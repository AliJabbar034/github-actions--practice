const {v4}=require('uuid')

const User=[]



const create= (user)=>{

     const id= v4()
     user["id"]=id
    User.push(user)

    return user

}


const getById= (id)=>{

    const user=User.filter((u)=> u.id===id);
    if(user.length > 0){
        return user[0]
    }

    return null

}


const allUser= ()=>{
    return User
}


module.exports={
    getById,allUser,create
}