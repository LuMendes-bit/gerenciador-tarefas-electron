function addTask() {
    //console.log("Entrou na função addTask")
    //alert("Função de adicionar tarefa")
    var input = document.getElementById("input-task")
    var inputValue = input.value
    input.value = ""
    var list = document.getElementById("task-list")
    var li =document.createElement("li")
   //li.innerText = inputValue
   //li.innerHTML = " Minha tarefa <button>Excluir</button> "
   //li.innerHTML = inputValue + " <button>Excluir</button> "
   li.innerHTML = `${inputValue} <button onclick="this.parentElement.remove()" >🗑️</button> `
   li.onclick = function() {
    li.className = "completed-task"
   }
    list.appendChild(li)
    console.log(inputValue)
}