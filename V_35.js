//Un callback es una función que se ejecuta a través de otra función 
//Los callbacks no son asincronos

// Ejemplo 1 
/* 

const getUser=(id,cb)=>{
    const user={
        name:"Alejandro",
        id:id
    }

   if(id==2) cb("use no existe") 
   else cb(null, user)
}
getUser(1,(err,user)=>{
    if(err) return console.log(err)
    console.log(`User name is ${user.name}`);    
})
*/

const users=[
    {
        id:1,
        name:"Dorian"
    },{
        id:2,
        name: "Alejandro"
    },{
        id:3,
        name: "Leonardo"
    }
]

const emails=[
    {
        id:1,
        email:"Dorian@gmail.com"
    },{
        id:2,
        email: "Alejandro@gmail.com"
    }
]
// Ejemplo 2
/* */
 const getUser=(id,cb)=>{
    const user=users.find(user=>user.id==id)
    if(!user) cb(`Usuario no existe con ese ID ${id}`)
    else cb(null,user)
    
    
 }



 getUser(4,(err,user)=>{
    if(err) return console.log(err)
    console.log(user);
    

 })

 const getEmail=(user,cb)=>{
    const email=emails.find(email=>email.id==user.id)
    if(!email) cb(`${user.name} no tiene tiene email `)
    else cb(null,{
        id:user.id,
        name:user.name,
        email: email.email
    })
    
 }

 getUser(3,(err,user)=>{
    if(err) return console.log(err)
    
    getEmail(user,(err,res)=>{
        if(err) return console.log(err);
        console.log(res);
        
    })

})