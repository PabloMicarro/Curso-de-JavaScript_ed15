function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    const e = new Error(
      `sum: necesita que sus parámetros (x,y) sean un número, tu pasastes: x: ${x}, y: ${y}`
    );

    e.name = "sumError";

    throw e;
  }
  return x + y;
}

function sum10(x) {
  if (typeof x !== "number") {
    const e = new Error(
      `sum10: necesita que su parámetro (x) sea un número, tu pasastes: x: ${x}`
    );

    e.name = "sum10Error";

    throw e;
  }
  return sum(x, 10);
}

try {
  sum10("foo") + sum(5, 8);
} catch (e) {
  if (e.name === "sumError") {
    console.error("Error desde sum");
  } else if (e.name === "sum10Error") {
    console.error("Error desde sum 10");
  }
}

sum10("foo") + sum(5, 8);
