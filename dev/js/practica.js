let num=100;
let mujer = "Mariana";
let saludo = "Hola como estas" +mujer;
let frase = `Eres Developer ${mujer}`;
console.log(num);
console.log(saludo);
console.log(frase);


//Metodos substring(num,num?)
let str = "HOLA MUNDO";
let res  = str.substring(1, 4);
console.log(res);
//metodo substr(a,b)
let res1= str.substr(1, 6);
console.log(res1);
//metodo slice(a,b)
let frutas=["PLatano", "Manzana", "Peras", "Mandarina", "Naranja"];
let citrus = frutas.slice(0, 3);
console.log(citrus);
//metodo startswitch
let ruben = "HOla MUndo Bienvenidos";
let ru =ruben.startsWith("HOla");
console.log(ru);
//metodo endswitch
let ruben1 = "HOla MUndo Bienvenidos";
let ru1 =ruben1.endsWith("Bienvenidos");
console.log(ru1);

//include()
let ruben3 = "HOla Mundo Bienvenidos";
let ru3 = ruben3.includes("Bienvenidos");
console.log(ru3);

//operador ternario
//condicion valorTrue: valorFalse

let miEdad= 24;
let mayorEdad = (miEdad > 18) ? "Si, eres mayor de edad": "No, sigue intentando"
console.log(mayorEdad);
//ciclo for: que no solo es para numeros,
//tambien para arreglos usando la propiedad length()
let cursos =['ReactJS', 'Angular2', 'AngularJS','JS', 'ANDROID','VainillaJS','ReactNativeJS','Ionic','NativeScript']
    for(let i=0; i<cursos.length; i++){
        if(cursos[i].toLocaleUpperCase().indexOf('A')==0){
        console.log(cursos[i]);
    }
}

let numeros=[1,2,3,4,5,6,7,8,9,10,11,12, true, 'Soledad','13'];
    let sum=0;
    for(let index=0; index<numeros.length; index++){
        let elementos = numeros[index]
        if(typeof elementos != 'number') continue;
        sum+=elementos;
    }
    console.log(sum);



//Metodo find
let arr= [1,2,3,4,5,6,7,8,9,10];
let bus=arr.find(el => el >8);
console.log(bus);

//iteradores

let iterador = arr.keys();
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