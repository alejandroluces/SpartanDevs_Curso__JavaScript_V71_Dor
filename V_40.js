/* 
const getName= async ()=>{
    return new Promise((resolver,reject)=>{
        setTimeout (()=>{
            resolver("Alejandro")
        },1500)
    })
}

const sayHello= async()=>{
    const name= await getName()
    return `Hola ${name}`
}

sayHello().then(res=> console.log(res))
*/


const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name:'Carlos' }]

const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]


const getUser=async(id)=>{
    const user=users.find(user=>user.id==id)
    if(!user) throw new error(`Usuario no existe con ese ID ${id}`)
    else return (user) 
    
 }

 const getEmail= async(user)=>{
    const email=emails.find(email=>email.id==user.id)
        if(!email) throw new error(`${user.name} no tiene email`)
        else return({
            id:user.id,
            name:user.name,
            email: email.email  
        
    })
}

const getInfo= async(id)=>{
    try{
        const user= await getUser(id)
        const res= await getEmail(user)
        return `${user.name} email es ${res.email}`
    } catch (error){
        console.log(error); 
    }
}
getInfo(3).then(res=> console.log(res))
