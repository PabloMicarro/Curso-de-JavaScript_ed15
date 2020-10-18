/*
Escribe un estamento switch que teste `val` y establezca `answer` con las siguientes condiciones

- 1 - "alpha"
- 2 - "beta"
- 3 - "gamma"
- 4 - "delta"

```js
function caseInSwitch(val) {
  let answer = "";

  return answer;
}

caseInSwitch(1);
```
*/

function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "aplha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

caseInSwitch(1);
