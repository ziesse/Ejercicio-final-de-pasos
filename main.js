const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_todo");
let id=1;

/*
<div class="container_list">
                <div class="container_list-1">
                    <input type="checkbox" class="casilla">
                    <p class="Actividad"> Tarea </p>

                </div>

                <div class="container_list-btn">
                    <button class = "btn-eliminar" ><i class="fas fa-trash-alt"></i></button>

                </div>

            </div> 
            */ 
function AddTodo(){
const div_todo = document.createElement("div");
const button = document.createElement("button");
const div_container = document.createElement("div");
const checkbox = document.createElement("input");
const parrafo = document.createElement("p");
const div_boton = document.createElement("div");
const icono = document.createElement("i");

/*atributos y clases*/ 

parrafo.innerHTML = input.value;
div_todo.classList.add("conteiner_list");
div_container.classList.add("container_list-1");
checkbox.classList.add("casilla");
checkbox.setAttribute("type","checkbox");
parrafo.classList.add("Actividad");
div_boton.classList.add("container_list-btn");
button.classList.add("btn-eliminar");
button.setAttribute("id",id++);
icono.classList.add("fas","fa-trash-alt");

/*Juntamos todos los elementos y los mostramos*/

div_todo.appendChild(div_container);
div_todo.appendChild(div_boton);
div_container.appendChild(checkbox);
div_container.appendChild(parrafo);
button.appendChild(icono);
div_boton.appendChild(button);

/* Agregamos todo al paquete general */
container_todo.appendChild(div_todo);

input.value = "";

/* eliminar tarea */

function removerTodo(id){
    document.getElementById(id).parentElement.parentElement.remove();
}

button.addEventListener("click", () =>{

    removerTodo(button.getAttribute("id")); 

});

}

btn_todo.addEventListener("click", () =>{
    if(input.value == "" || input.value.trim() == "" ){
        window.alert("Input vacio");
    }else{
        AddTodo();  
    }

})