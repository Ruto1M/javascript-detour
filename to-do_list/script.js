const inputbox = document.getElementById("todo-input");
const list =document.getElementById("todo-list");

function addTask(){
    if (inputbox.value === ' '){
        alert ("please write something in the task box.")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        span.className = "delete";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle ("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask()