let button = document.getElementById("colorButton")

button.style.width = "200px"
button.style.fontSize = "20px"

button.addEventListener("click",()=>{
    button.style.width = `${parseInt(button.style.width.replace("px",""))+20}px`;
    button.style.fontSize = `${parseInt(button.style.fontSize.replace("px",""))+2}px`;
})

function randomColor(){
    let hexColor = Math.floor(Math.random() * 256*256*256).toString(16)
    document.body.style.backgroundColor = "#"+hexColor    
}