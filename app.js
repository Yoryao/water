console.log("app working");
let bebida = 0;


function guardar () {
    let nombre = document.getElementById("name").value;
    let litros = document.getElementById("liters").value;
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("litros", litros);



}


function mostrar () {
    let nombre = localStorage.getItem("nombre");

    let titular = document.getElementById("titular");
    titular.innerText = "Hola " + nombre;

}

function beber() {
let agua = document.getElementById("agua");
bebida = bebida + 5;

agua.style.height = bebida + "%";


}

function volver() {
    localStorage.clear();




}