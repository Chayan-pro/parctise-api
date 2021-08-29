//q-1 q-2 no
/* const loadApi = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayApi(data))
}
const displayApi = data =>{
    console.log(data.quote)
    const showApi = document.getElementById('show-api');
    showApi.innerHTML = data.quote;
}
 */

//q-3

/* const loadUser = () =>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadUser();

const displayUser = users =>{
    console.log(users);
    const showUser = document.getElementById('users');
    //q-3 for 
     for (const user of users){
        // console.log(user);
        const div =document.createElement ('div');
        div.innerHTML = user.email;
        showUser.append(div);
    } 
}
 */

//q-4
const showUser = ()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>  detailUser (data))
}
showUser();
const detailUser = users =>{
    console.log(users)
    const userDisplay = document.getElementById('user-details');
    console.log(userDisplay);
    users.forEach(element => {
        console.log(element.name);
        const p = document.createElement('p');
        p.innerText = `${element.name} Email: ${element.email} Address: ${element.address}`
        userDisplay.appendChild(p);
    });
}

//q-6


