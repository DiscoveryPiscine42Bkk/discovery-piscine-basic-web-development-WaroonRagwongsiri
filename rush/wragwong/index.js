let hamburger = document.getElementById("hamburger")

hamburger.addEventListener('click',()=>{
    let hamcon = document.getElementById("hamburger-content")
    if(hamcon.classList.contains('hidden')){
        hamcon.classList.remove('hidden')
    }else{
        hamcon.classList.add('hidden')
    }
})