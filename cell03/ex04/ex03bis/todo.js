function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

function deleteCookie(name) {
  setCookie(name, null,null);
}

function getAllCookie() {
  const cDecode = decodeURIComponent(document.cookie);
  const cArray = cDecode.split(";");

  return cArray;
}

function readCookieToDiv(){
    const ft_list = $("#ft_list");
    if(todolist[0] == ''){
        return
    }
    for(let i=0;i<todolist.length;i++){
        let todo_name = todolist[i].split("=")[0]
        let todo_val = todolist[i].split("=")[1]
        ft_list.append(`<div class="todo" id="${todo_name}"><p>${todo_val}</p></div>`);
    }
}

function popUpCreateTodo(){
    let text = prompt("Enter your Todo")
    if(text == null || text == ''){
        return
    }
    if(todolist[0] == ""){
        setCookie(0,text,365)
        location.reload()
        return
    }
    let last_name = todolist[todolist.length - 1].substring(0,todolist[todolist.length - 1].indexOf("="))
    setCookie(parseInt(last_name) + 1,text,365)
    location.reload()
    return
}

function confirmDelete(name){
    if(confirm(`delete?`)){
        deleteCookie(name)
    }
    location.reload()
}

//declare variable
const btn = $("#new")
let todolist = getAllCookie()

//read cookie to div
readCookieToDiv()

console.log(todolist)

btn.on('click',()=>{
    popUpCreateTodo()
})

const todos = document.getElementsByClassName("todo")
for(let i=0;i<todolist.length;i++){
  todos[i].addEventListener("click",()=>{
    confirmDelete(todolist[i].split('=')[0])
  })
}