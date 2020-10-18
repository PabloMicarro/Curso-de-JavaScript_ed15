/*
Convierte la lógica para usar estamentos `else if`

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
*/

function testElseIf(val) {
  if (val < 5) {
    return "Smaller than 5";
  } else if (val > 10) {
    return "Greather than 10";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(7));
