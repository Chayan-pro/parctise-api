const loadData = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadData ();
const displayUser = users =>{
    const result = users.results;
    console.log(result)
    const userDisplay = document.getElementById('user-details');
    console.log(userDisplay);
    result.forEach(buddy => {
        console.log(buddy.name)
      const p = document.createElement('p');
      p.classList.add('design')
      p.innerHTML =` UserName :${buddy.name.first} Location:${buddy.location.city} Eamil: ${buddy.email}`;
        userDisplay.appendChild(p);
        
    });
}