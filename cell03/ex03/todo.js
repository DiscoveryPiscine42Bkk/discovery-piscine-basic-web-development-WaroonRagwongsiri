const ft_list = document.getElementById("ft_list");

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getAllCookie() {
  const cDecode = decodeURIComponent(document.cookie);
  const cArray = cDecode.split(";");

  return cArray;
}

function popUpCreateForm() {
  let text = prompt("Please enter your Todo");
  if (text == null || text == "") {
    return
  }
  if(todolist[0] == ""){
    setCookie(0,text,365)
    location.reload()
    return
  }
  setCookie((parseInt(todolist[todolist.length - 1].substring(0,todolist[todolist.length - 1].indexOf("=")))+1),text,365)
  location.reload()
}

function readTodo() {
  const cDecode = decodeURIComponent(document.cookie);
  const cArray = cDecode.split(";");

  for (let i = 0; i < todolist.length ; i++){
    let div = document.createElement("div");
    div.classList.add("todo")
    div.id = i
    div.innerText = cArray[i].substring(cArray[i].indexOf('=') + 1)
    ft_list.appendChild(div)
  }
}

function confirmDelete(i){
  if (confirm(i)) {
    deleteCookie(`${i}`)
    location.reload()
  }
}

let todolist = getAllCookie();

readTodo();

console.log(todolist);
console.log(todolist.length);

const todos = document.getElementsByClassName("todo")
for(let i=0;i<todolist.length;i++){
  todos[i].addEventListener("click",()=>{
    confirmDelete(todolist[i].substring(0,todolist[i].indexOf("=")))
  })
}