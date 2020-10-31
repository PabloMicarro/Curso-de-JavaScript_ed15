# Popurri

## Como empezar

Crea un archivo `.js` y guardalo en tu carpeta de ejercicios y asocialo a un `index.html` usando la etiqueta `<script src="index.js" defer></script>`

- Crea una función que reciba un objeto `Date` y devuelva el momento del día que es, basado en la hora, puedes usar `Date.getHours()`:

  - Mañana: 06:01-12:00
  - Tarde: 12:01-22:00
  - Noche: 22:01-06:00

- Escribe un programa que pide al usuario un número `n` y suma los números que van de 1 a `n`.

- Escribe un programa que pide al usuario un número `n` y multiplica los números que van de 1 a `n`.

- Escribe un programa que pide al usuario un número `n` y permitele elegir entre multiplicar o sumar de 1 a `n`.

- Escribe un programa que le pide al usuario que averigüe un número entre 1 al 100. Ante cada intento del usuario de averiguarlo debes decirle al usuario si el número es más alto o más bajo que su respuesta. Cuando lo averigüe dile al usuario cuantos intentos le ha llevado. Si el usuario mete varias veces el mismo número debe contar como un sólo intento.

- Escribe un programa que nos diga los siguientes qué años van a ser bisiestos en los próximos 20 años.

  - Para determinar si un año es bisiesto:

    1. Si el año es divisible por 4, ves al paso 2. De lo contrario, vaya al paso 5.
    2. Si el año es divisible por 100, ves al paso 3. De lo contrario, vaya al paso 4.
    3. Si el año es divisible por 400, ves al paso 4. De lo contrario, vaya al paso 5.
    4. El año es un año bisiesto (tiene 366 días).
    5. El año no es un año bisiesto (tiene 365 días).

- Escribe una función que acepta un array de strings y dice cual es el elemento más largo.

- Escribe una función que que acepta un array y retorna un nuevo array con los elementos en posición de index par.

- Escribe una función que acepta un string y retorna `true` o `false` en base a si dicho string es un palíndromo.

  - Palíndromo: palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.

- Escribe una función que acepte dos arrays y devuelva uno con la información concatenada, usando un loop.

- Escribe una función que acepte un número y devuelva un array con sus dígitos: por ejemplo `1234` devuelve [1,2,3,4]

- Escribe dos funciones que codifican y decodifican textos. La que codifica debe cojer la primera letra de cada palabra y trasladarla al final de la misma y añadir "ay". La función contraria acepta los textos que la primera genera y los convierte a su original. Por ejemplo:
  `El zorro marrón` se convierte a `Leay orrozay arrónmay`

- Cree una lista de la compra. La lista debe ser una array multidimensional que contenga varios subarrays. El primer elemento de cada subarray debe contener una cadena con el nombre del elemento. El segundo elemento debe ser un número que represente la cantidad: Por ejemplo: `["Pan", 1]`.

  - Debes implementar funciones que permitan añadir nuevos items al array.
  - Debes permitir editar la cantidad o incluso eliminar un elemento de la lista de la compra.

- Escribe un programa que juegue a piedra, papel o tijera con el usuario, intenta guardar las respuestas del usuario y predecir sus tendencias (tal vez un array de respuestas del usuario??)

- Escribe un programa que acepte numeros y los convierta en numeros romanos.

  - Usa: https://www.mathsisfun.com/roman-numerals.html

- Escribe una función que acepte un número de teléfono con prefijo europeo y valide si esta bien construido:

  - Usa: https://en.wikipedia.org/wiki/Telephone_numbers_in_Europe

- Escriba una función que divide un array (primer argumento) en grupos de la longitud del tamaño (segundo argumento) y los devuelva como un array bidimensional.

  - Ejemplos:
    - `(["a", "b", "c", "d"], 2)` debe retornar `[["a", "b"], ["c", "d"]]`
    - `([0, 1, 2, 3, 4, 5], 3)` debe retornar `[[0, 1, 2], [3, 4, 5]]`
    - `([0, 1, 2, 3, 4, 5], 4)` debe retornar `[[0, 1, 2, 3], [4, 5]]`
    - `([0, 1, 2, 3, 4, 5, 6], 3)` debe retornar `[[0, 1, 2], [3, 4, 5], [6]]`

- Escribe un programa que convierte grados farenheit a celsius y viceversa.
  - El algoritmo para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicada por 9/5, más 32
