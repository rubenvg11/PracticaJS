"use strict";

var num = 100;
var mujer = "Mariana";
var saludo = "Hola como estas" + mujer;
var frase = "Eres Developer " + mujer;
console.log(num);
console.log(saludo);
console.log(frase);

//Metodos substring(num,num?)
var str = "HOLA MUNDO";
var res = str.substring(1, 4);
console.log(res);
//metodo substr(a,b)
var res1 = str.substr(1, 6);
console.log(res1);
//metodo slice(a,b)
var frutas = ["PLatano", "Manzana", "Peras", "Mandarina", "Naranja"];
var citrus = frutas.slice(0, 3);
console.log(citrus);
//metodo startswitch
var ruben = "HOla MUndo Bienvenidos";
var ru = ruben.startsWith("HOla");
console.log(ru);
//metodo endswitch
var ruben1 = "HOla MUndo Bienvenidos";
var ru1 = ruben1.endsWith("Bienvenidos");
console.log(ru1);

//include()
var ruben3 = "HOla Mundo Bienvenidos";
var ru3 = ruben3.includes("Bienvenidos");
console.log(ru3);

//operador ternario
//condicion valorTrue: valorFalse

var miEdad = 24;
var mayorEdad = miEdad > 18 ? "Si, eres mayor de edad" : "No, sigue intentando";
console.log(mayorEdad);
//ciclo for: que no solo es para numeros,
//tambien para arreglos usando la propiedad length()
var cursos = ['ReactJS', 'Angular2', 'AngularJS', 'JS', 'ANDROID', 'VainillaJS', 'ReactNativeJS', 'Ionic', 'NativeScript'];
for (var i = 0; i < cursos.length; i++) {
    if (cursos[i].toLocaleUpperCase().indexOf('A') == 0) {
        console.log(cursos[i]);
    }
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true, 'Soledad', '13'];
var sum = 0;
for (var index = 0; index < numeros.length; index++) {
    var elementos = numeros[index];
    if (typeof elementos != 'number') continue;
    sum += elementos;
}
console.log(sum);

//Metodo find
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bus = arr.find(function (el) {
    return el > 8;
});
console.log(bus);

//iteradores

var iterador = arr.keys();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());