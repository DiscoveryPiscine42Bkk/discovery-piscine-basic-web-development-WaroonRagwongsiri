let button = $("#colorButton")

let width = 100
let fontSize = 20

button.css("width",width)
button.css("fontSize",fontSize)

button.on('click',()=>{
    width+=10
    fontSize+=2
    button.css("width",width)
    button.css("fontSize",fontSize)
})

button.on('click',()=>{
    randomColor()
})

function randomColor(){
    let hexColor = Math.floor(Math.random() * 256*256*256).toString(16)
    $('body').css("background-color","#"+hexColor)    
}