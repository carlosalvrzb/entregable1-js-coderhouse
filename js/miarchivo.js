let entrada = prompt("Ingresar un texto (ESC para salir)");
let cadena = ""
while (entrada != "ESC") {
    alert("El usuario ingresó: " + entrada);
    cadena = cadena + " " + entrada
    alert("Tu cadena de texto va así: " + cadena)
    entrada = prompt("Ingresar otro texto que quieras añadir en la cadena de texto (o ingresa ESC para terminar)");
}