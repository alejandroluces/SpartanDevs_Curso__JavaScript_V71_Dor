const button = document.getElementById('button')
//res = response = respuesta

/* button.addEventl_istener( 'click', () => { 
    const newPost = {
        title : 'A new post',
        body: 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        userid: 1
}
fetch('https ://jsonplaceholder.typicode.com/posts', { 
    method: 'POST',
    body: JS0N.stringify(newPost), 
    headers: {
        "Content-type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
})*/

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{
            title:"A new post",
            body:"lorem Lorem ipsum dolor sit amet consectetur adipisicing elit",
            userId:1
        }
        }) .then(res => console.log(res))
    })