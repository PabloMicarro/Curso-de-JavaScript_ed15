//Construye dos strings y concaténalas con el operados '+', deben tener significado
let string1 = "La temática de este ejercicio ";
let string2 = "es la concatenación"
console.log(string1 + string2);

//Construye dos strings y concaténalas con el operados '+=', deben tener significado
string1+=string2;
console.log(string1);

// Inicializa una variable con un string que sea tu nombre, una variable 'fistQuote' con el valor "Mi nombre es", y una tercera variable 'lastQuote' con el valor "¿cómo estás?" y concátenalas para formar una frase ej "Mi nombre es Pablo ¿cómo estás?"

// primer intento pero no cumplo las condiciones, he añadido espacios a los strings
let name = "Pablo";
let firstQuote = "Mi nombre es ";
let lastQuote = " ¿cómo estás?";
console.log(firstQuote + name + lastQuote);

// así no hay espacio entre los strings
let name = "Pablo";
let firstQuote = "Mi nombre es";
let lastQuote = "¿cómo estás?";
firstQuote.concat(name, lastQuote)

// podemos añadir esos espacios
firstQuote.concat(" ").concat(name).concat(" ").concat(lastQuote);

// con template string sería así:
const name = "Pablo";
const firstQuote = "Mi nombre es";
const lastQuote = "¿cómo estás?";
const result = `${firstQuote} ${name} ${lastQuote}`;
console.log(result);