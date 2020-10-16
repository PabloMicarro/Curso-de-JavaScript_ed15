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

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greather tan or equal to 10";
  }
}

console.log(orderMyLogic(7));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(7));

/*
En el juego de golf, cada hoyo tiene un par, lo que significa el número promedio de golpes que se espera que haga un golfista para meter la bola en un hoyo para completar su juego. Dependiendo
*/
const names = [
  "Hole-in-one",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

console.log(golfScore(5, 4));
