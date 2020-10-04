// Declara una variable llamada 'myStr' y usa los backslash para asignarla un valor que se vea en la consola como `Soy un string "con dobles comillas", dentro de "dobles comillas"`
let myStr = "Soy un string con \"dobles comillas\" dentro de \"dobles comillas\"";
console.log(myStr);
// - Realiza el mismo ejercicio con otra variable pero escapando comillas simples
let myStr2 = "Soy un string con \'comillas simples\' dentro de \'comillas simples\'";
console.log(myStr2);

// - Escapa un backslash en otra variable e imprímelo por consola
const quote = "\"";
const newString = `Entre ${quote}comillas${quote}`;
console.log(newString);

// - Escapa en un string de tu elección una nueva línea
let myStr3 = "Esta vez el string contiene: \nun salto de línea";
console.log(myStr3);

// - Escapa en un string de tu elección un retorno de carro
let myStr4 = "Esta vez el string contiene: \run salto de carro";
console.log(myStr4);
// Preguntar a Iván sobr e le salto de carro

// - Escapa en un string de tu elección una tabulación
let myStr5 = "Esta vez el string contiene: \t un espacio de tabulación";
console.log(myStr5);
