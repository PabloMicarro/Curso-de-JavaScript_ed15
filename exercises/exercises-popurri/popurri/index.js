/*
- Crea una función que reciba un objeto `Date` y devuelva el momento del día que es, basado en la hora, puedes usar `Date.getHours()`:

  - Mañana: 06:01-12:00
  - Tarde: 12:01-22:00
  - Noche: 22:01-06:00
*/

function moment() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 6 && hours < 12) {
    console.log("Mañana");
  } else if (hours >= 12 && hours < 22) {
    console.log("Tarde");
  } else if (hours >= 22 || hours < 6) {
    console.log("Noche");
  }
}
/*
- Escribe un programa que pide al usuario un número `n` y suma los números que van de 1 a `n`.
*/

function userSum() {
  let sum = 0;
  const n = prompt(
    "Dime un número y te daré la suma de los números que van desde el 1 al tuyo"
  );

  for (let i = 1; i <= Number(n); i++) {
    sum += i;
  }

  const result = alert(
    `El resultado de la suma desde 1 al número elegido es: ${sum}`
  );
  //   return sum;
}

/*
- Escribe un programa que pide al usuario un número `n` y multiplica los números que van de 1 a `n`.
*/

function userProduct() {
  let product = 1;

  const n = prompt(
    "Dime un número y te daré la multiplicación de los números que van desde el 1 al tuyo"
  );

  for (let i = 1; i <= Number(n); i++) {
    product *= i;
  }

  const result = alert(
    `El resultado de la multiplicación desde 1 al número elegido es: ${product}`
  );
  //   return product;
}

/*
- Escribe un programa que pide al usuario un número `n` y permitele elegir entre multiplicar o sumar de 1 a `n`.
*/

function chooseOperation() {
  const n = prompt("Dime un número");
  const choose = prompt(
    `Ahora dime qué prefieres que hagamos "sumar" o "multiplicar"`
  );

  switch (choose) {
    case "sumar": {
      let sum = 0;

      for (let i = 1; i <= Number(n); i++) {
        sum += i;
      }
      const result = alert(
        `El resultado de la suma desde 1 al número elegido es: ${sum}`
      );
      //   return sum;
      break;
    }
    case "multiplicar": {
      let product = 1;

      for (let i = 1; i <= Number(n); i++) {
        product *= i;
      }
      const result = alert(
        `El resultado de la multiplicación desde 1 al número elegido es: ${product}`
      );
      //   return product;
      break;
    }

    default: {
      alert("No has elegido una opción válida");
    }
  }
}

/*
- Escribe un programa que le pide al usuario que averigüe un número entre 1 al 100. Ante cada intento del usuario de averiguarlo debes decirle al usuario si el número es más alto o más bajo que su respuesta. Cuando lo averigüe dile al usuario cuantos intentos le ha llevado. Si el usuario mete varias veces el mismo número debe contar como un sólo intento.
*/

let attemptsNumbers = [];
let attemptsCounter = 0;
const secretNumber = Math.floor(Math.random() * 100) + 1;

function riddle() {
  let userNumber = Number(
    prompt(
      `Adivina el número secreto. \nTe reto a hacerlo en el menor número de intentos. \nIntroduce un número de 1 al 100.`
    )
  );

  evaluate();

  function evaluate() {
    if (!attemptsNumbers.includes(userNumber)) {
      attemptsNumbers.push(userNumber);
      attemptsCounter++;
    }

    if (userNumber < secretNumber) {
      userNumber = Number(
        prompt(
          `Incorrecto, el número que buscamos es mayor que ${userNumber}: \n Inténtalo de nuevo`
        )
      );
      evaluate();
    } else if (userNumber > secretNumber) {
      userNumber = Number(
        prompt(
          `Incorrecto, el número que buscamos es menor que ${userNumber}: \n Inténtalo de nuevo`
        )
      );
      evaluate();
    } else {
      userNumber = alert(
        `Correcto!! el número que buscábamos era el ${secretNumber}, lo has acertado en ${attemptsCounter} intentos`
      );
    }
  }
}

/*
- Escribe un programa que nos diga los siguientes qué años van a ser bisiestos en los próximos 20 años.

  - Para determinar si un año es bisiesto:

    1. Si el año es divisible por 4, ves al paso 2. De lo contrario, vaya al paso 5.
    2. Si el año es divisible por 100, ves al paso 3. De lo contrario, vaya al paso 4.
    3. Si el año es divisible por 400, ves al paso 4. De lo contrario, vaya al paso 5.
    4. El año es un año bisiesto (tiene 366 días).
    5. El año no es un año bisiesto (tiene 365 días).
*/

function leapYear() {
  let initPeriod = 2020;
  const endPeriod = initPeriod + 20;

  for (initPeriod; initPeriod <= endPeriod; initPeriod++) {
    if (
      (initPeriod % 4 == 0 && initPeriod % 100 != 0) ||
      initPeriod % 400 == 0
    ) {
      console.log(`${initPeriod} es bisiesto`);
    }
  }
}

/*
- Escribe una función que acepta un array de strings y dice cual es el elemento más largo.
*/

/*
- Escribe una función que que acepta un array y retorna un nuevo array con los elementos en posición de index par.
*/

/*
- Escribe una función que acepta un string y retorna `true` o `false` en base a si dicho string es un palíndromo.
*/
function palindrome(sentence) {
  const cleanSentence = sentence
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") //elimina acentos
    .replace(/ /g, "") //elimina espacios
    .toLowerCase(); //minúsculas

  return [...cleanSentence].reverse().join("") === cleanSentence;
}
/*
- Escribe una función que acepte dos arrays y devuelva uno con la información concatenada, usando un loop.
*/

/*
- Escribe una función que acepte un número y devuelva un array con sus dígitos: por ejemplo `1234` devuelve [1,2,3,4]
*/
function numberToArray(n) {
  //   const myNumber = Number(n);
  //   const arrayNumber = [...myNumber];
  //   return arrayNumber;
  console.log(n);
  nToNumber = Number(n);
  let arrayNumber = [nToNumber];
  console.log(arrayNumber);
  newArray = [...arrayNumber];
  console.log(newArray);
}

/*
- Escribe dos funciones que codifican y decodifican textos. La que codifica debe cojer la primera letra de cada palabra y trasladarla al final de la misma y añadir "ay". La función contraria acepta los textos que la primera genera y los convierte a su original. Por ejemplo:
  `El zorro marrón` se convierte a `Leay orrozay arrónmay`
*/

let textForEncode;

function encode(textForEncode) {
  const encodeText = [...textForEncode];
  encodeText.filter("l");
}

/*
- Cree una lista de la compra. La lista debe ser una array multidimensional que contenga varios subarrays. El primer elemento de cada subarray debe contener una cadena con el nombre del elemento. El segundo elemento debe ser un número que represente la cantidad: Por ejemplo: `["Pan", 1]`.

  - Debes implementar funciones que permitan añadir nuevos items al array.
  - Debes permitir editar la cantidad o incluso eliminar un elemento de la lista de la compra.
*/
const shoppingList = [];

function addToList(product, units) {
  console.log(`Hay que comprar ${units} de ${product}`);

  const newproduct = [product, units];

  shoppingList.push(newproduct);
}
/*
- Escribe un programa que juegue a piedra, papel o tijera con el usuario, intenta guardar las respuestas del usuario y predecir sus tendencias (tal vez un array de respuestas del usuario??)
*/

/*
- Escribe un programa que acepte numeros y los convierta en numeros romanos.

  - Usa: https://www.mathsisfun.com/roman-numerals.html
*/
function toRomanNumbers() {
  let arabicNumber = prompt(
    "Introduce un número entero entrer 1 y 3999 para transformarlo a números romanos"
  );

  if (
    Number.isInteger(Number(arabicNumber)) &&
    arabicNumber > 0 &&
    arabicNumber < 4000
  ) {
    // Pasamos número introducido a Array
    const arabicArray = [...arabicNumber];

    // Sacamos la longitud del Array
    const arabicArrayLenght = arabicArray.length;

    // Sacamos la posición index de la última cifra
    let lastIndex = arabicArrayLenght - 1;

    // Declaramos iteration con valor "0"
    let iteration = 0;

    // Hacemos un for por el número de cifras del número introducido
    for (lastIndex; lastIndex >= 0; lastIndex--) {
      const iterationValue = arabicArray[lastIndex];
      iteration++;

      //Establecemos los resultados en función de si la vuelta es para unidades, decenas, centenas o millares.
      //   Probalemente se pueda hacer un mapeo o algo para refactorizar el código

      if (iteration === 1) {
        switch (iterationValue) {
          case "0": {
            arabicArray[lastIndex] = "";
            break;
          }
          case "1": {
            arabicArray[lastIndex] = "I";
            break;
          }
          case "2": {
            arabicArray[lastIndex] = "II";
            break;
          }
          case "3": {
            arabicArray[lastIndex] = "III";
            break;
          }
          case "4": {
            arabicArray[lastIndex] = "IV";
            break;
          }
          case "5": {
            arabicArray[lastIndex] = "V";
            break;
          }
          case "6": {
            arabicArray[lastIndex] = "VI";
            break;
          }
          case "7": {
            arabicArray[lastIndex] = "VII";
            break;
          }
          case "8": {
            arabicArray[lastIndex] = "VIII";
            break;
          }
          case "9": {
            arabicArray[lastIndex] = "IX";
            break;
          }
        }
      } else if (iteration === 2) {
        switch (iterationValue) {
          case "0": {
            arabicArray[lastIndex] = "";
            break;
          }
          case "1": {
            arabicArray[lastIndex] = "X";
            break;
          }
          case "2": {
            arabicArray[lastIndex] = "XX";
            break;
          }
          case "3": {
            arabicArray[lastIndex] = "XXX";
            break;
          }
          case "4": {
            arabicArray[lastIndex] = "XL";
            break;
          }
          case "5": {
            arabicArray[lastIndex] = "L";
            break;
          }
          case "6": {
            arabicArray[lastIndex] = "LX";
            break;
          }
          case "7": {
            arabicArray[lastIndex] = "LXX";
            break;
          }
          case "8": {
            arabicArray[lastIndex] = "LXXX";
            break;
          }
          case "9": {
            arabicArray[lastIndex] = "XC";
            break;
          }
        }
      } else if (iteration === 3) {
        switch (iterationValue) {
          case "0": {
            arabicArray[lastIndex] = "";
            break;
          }
          case "1": {
            arabicArray[lastIndex] = "C";
            break;
          }
          case "2": {
            arabicArray[lastIndex] = "CC";
            break;
          }
          case "3": {
            arabicArray[lastIndex] = "CCC";
            break;
          }
          case "4": {
            arabicArray[lastIndex] = "CD";
            break;
          }
          case "5": {
            arabicArray[lastIndex] = "D";
            break;
          }
          case "6": {
            arabicArray[lastIndex] = "DC";
            break;
          }
          case "7": {
            arabicArray[lastIndex] = "DCC";
            break;
          }
          case "8": {
            arabicArray[lastIndex] = "DCCC";
            break;
          }
          case "9": {
            arabicArray[lastIndex] = "CM";
            break;
          }
        }
      } else if (iteration === 4) {
        switch (iterationValue) {
          case "0": {
            arabicArray[lastIndex] = "";
            break;
          }
          case "1": {
            arabicArray[lastIndex] = "M";
            break;
          }
          case "2": {
            arabicArray[lastIndex] = "MM";
            break;
          }
          case "3": {
            arabicArray[lastIndex] = "MMM";
            break;
          }
        }
      }
    }

    return arabicArray.join("");
  } else {
    const invalidNumber = alert("El número introducido no es válido");
    //  No llamo a la función para iniciarla de nuevo porque me retorna undefined
    // toRomanNumbers();
  }
}
/*
- Escribe una función que acepte un número de teléfono con prefijo europeo y valide si esta bien construido:

  - Usa: https://en.wikipedia.org/wiki/Telephone_numbers_in_Europe
*/

/*
- Escriba una función que divide un array (primer argumento) en grupos de la longitud del tamaño (segundo argumento) y los devuelva como un array bidimensional.

  - Ejemplos:
    - `(["a", "b", "c", "d"], 2)` debe retornar `[["a", "b"], ["c", "d"]]`
    - `([0, 1, 2, 3, 4, 5], 3)` debe retornar `[[0, 1, 2], [3, 4, 5]]`
    - `([0, 1, 2, 3, 4, 5], 4)` debe retornar `[[0, 1, 2, 3], [4, 5]]`
    - `([0, 1, 2, 3, 4, 5, 6], 3)` debe retornar `[[0, 1, 2], [3, 4, 5], [6]]`
*/

/*
- Escribe un programa que convierte grados farenheit a celsius y viceversa.
  - El algoritmo para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicada por 9/5, más 32
*/

function convertTemperature() {
  temperature = prompt(
    "Introduce una temperatura y de daré el equivalente en Celsius y Farenheit"
  );

  farenheitTemperature = temperature * (9 / 5) + 32;
  celsiusTemperature = (temperature - 32) * (5 / 9);

  alert(
    `${temperature} grados Celsius equivalen a ${farenheitTemperature} grados Farenheit \n${temperature} grados Farenheit equivalen a ${celsiusTemperature} grados Celsius`
  );
}
