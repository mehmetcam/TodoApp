const clearAll = document.getElementById("deleteAll");
const listem = document.getElementById("listem");

listem.ondblclick = function deneme(){console.log("oldu");}

clearAll.addEventListener("click",clearAllTodos);

function clearAllTodos(e){
    if(confirm("Vous voulez vraiment supprimer tous les todos?")){

        while(listem.firstElementChild != null){
            listem.removeChild(listem.firstElementChild);
        }

    };
}


listem.addEventListener("click",deleteTodo);

function deleteTodo(e){
 
    if(e.target.className === "fas fa-times"){
        console.log(e.target.tagName)
        e.target.parentElement.remove();
    }
}




listem.addEventListener("dblclick",missionOK);


function missionOK(m){
    
    if(m.target.style.textDecoration != "line-through"){
        m.target.style.textDecoration = "line-through";
        m.target.style.opacity = "0.2"
    }
    else{
        m.target.style.textDecoration = "none";
        m.target.style.opacity = "0.5"
    }

    

}

window.addEventListener("keyup",function(noteIt){
if(noteIt.keyCode == 13){
    noteIt.preventDefault();
    document.getElementById("sendIt").click();
}
else if(noteIt.keyCode == 27){
    noteIt.preventDefault();
    document.getElementById("input").value="";
}
});

function getTodosFromStorage(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }

    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function noteIt(){
    
    const listem = document.getElementById("listem");
    const newTodo = document.createElement("LI");
    newTodo.classList.add("liAdded");
    
    const input = document.getElementById("input").value.trim();
    if(input){
        newTodo.innerHTML = input + "<i class='fas fa-times'></i>";
        listem.appendChild(newTodo);    
    }
    else{
        alert("plz write sthg bro")
    }
    document.getElementById("input").value="";

    let todos = getTodosFromStorage();
    todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todos));
}




// function addTodoToStorage(newTodo){
//     let todos = getTodosFromStorage();
//     todos.push(newTodo)
//     localStorage.setItem("todos",JSON.stringify(todos));
// }




function clearIt(){
    document.getElementById("input").value = "";  
}



