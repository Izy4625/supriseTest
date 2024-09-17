const body = document.getElementById("body");


function createButton(){
    const button = document.createElement("button");
        
        body.appendChild(button)
        button.textContent ="show box"
        button.addEventListener('click',showBox)}

function showBox(){
    const box = document.getElementsByTagName("div")[0];
    if(!(box.classList.contains("box"))){
        box.classList.add("box")
       }
        else{
            box.classList.remove("box")
        }
}


function createGoldBox(){
    const box = document.createElement('div')
    body.appendChild(box)
    
}
function fetchUsers() {
    return fetch("https://randomuser.me/api/?results=1")
        .then((response) => { 
            return response.json().then((data) => {
                console.log(data.results);
                return data.results[0];
            }).catch((err) => {
                console.log(err);
            }) 
        });}

        async function loadData(){
            const data = await fetchUsers();
        const name = document.createElement("h2");
        name.textContent = data["name"]["first"] + " "+ data["name"]["last"];
    body.appendChild(name)}
   
// createGoldBox();
createButton();
createGoldBox();
loadData();
