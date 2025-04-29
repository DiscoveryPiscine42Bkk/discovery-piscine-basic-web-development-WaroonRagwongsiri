function randomColor(){
    let hexColor = Math.floor(Math.random() * 256*256*256).toString(16)
    document.body.style.backgroundColor = "#"+hexColor
}


