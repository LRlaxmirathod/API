// fetch api using promise chain
let button = document.querySelector("button")

let p = document.querySelector("p")

let url = "https://catfact.ninja/fact";

function get(){
    fetch(url)
    .then((response)=>{
     console.log(response)
     return response.json()
    })
    .then((data)=>{
console.log(data)
p.textContent = data.fact
    })
}

button.addEventListener('click' , ()=>{
    console.log("click")
    get()
})