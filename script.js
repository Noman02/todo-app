const inputBox= document.getElementById("input-box")
const listContainer= document.getElementById("list-container")
const myBtn= document.getElementById("my-btn")


inputBox.addEventListener("keyup", e =>{
    e.preventDefault()
    if (e.keyCode === 13) {
        myBtn.click()
    }
})

myBtn.addEventListener("click",()=>{
    if(inputBox.value === ""){
        alert("please write something.")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value= ""
    saveTodoLs()
})

listContainer.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
        saveTodoLs()
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
        saveTodoLs()
    }
},false)

function saveTodoLs(){
localStorage.setItem("todos",listContainer.innerHTML)
}

function displayTodos(){
listContainer.innerHTML = localStorage.getItem("todos")
}
displayTodos()