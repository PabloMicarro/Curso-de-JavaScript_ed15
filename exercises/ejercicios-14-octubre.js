/*
Simplifica el siguiente código con un operador

const n = 87;
n= n + 1;

n +=1;
n++;
*/

/*
Simplifica el siguiente código con un operador

const n = 87;
n= n + 1;

n -= 1;
n--;
*/


/*
Convierte al operador adecuado

const a = 3;
const b = 17
const c = 12;
const d = 0;

a = a + 12; // a += 12;
b = b -9; // b -= 9;
c = c * 5; // c *=5;
d = d / 4; d /=4;
*/


/**
 Traducir estas frases a JS


 "no (A y B)" es lo mismo que "(no A) o (no B)"
 MIA: !(A && B) === !(A) || !(B)
 IVÁN:

 const a = true;
 const b = false;

 !(a && b) === !a || !b;

 "no (A o B)" es lo mismo que "(no A) y (no B)"

 MIA: !(A || B) === !(A) && !(B)
 IVÁN:
  !(a || b) === !a && !b;
*/


/*
COMPARADOR IGUALDAD:

Modificar if para que la funcíon funciones

function sonIgualesA12(x) {
    if(x) {
        return "Igual"
    }

    return "No igual"
}

console.log(sonIgualesA12(10))
console.log(sonIgualesA12(12))
console.log(sonIgualesA12("12"))

function sonIgualesA12(x) {
    if(x == 12) {
        return "Igual"
    }

    return "No igual"
}

*/


/*
function testAnd(x) {
    if (x) {
        if (x) {
            return "Si"
        }
    }

    return "No"
}

//retorna Si, cuando el valor es menor o igual a 50
//retorna Si, cuando el valor es mayor o igual a 25

function testAnd(x) {
    if (x >= 25 && x <= 50) {
        return "Si";
    }
    return "No";
}
*/

/*
AÑADIR EJERCICIO FUERA A 30 MINUTOS DE TERMINAR LA CLASE
*/