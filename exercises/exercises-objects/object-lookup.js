/* 

Convierte el estamento switch en un objeto llamado tabla. Usa el val para retornar el string correcto y asocialo en la variable result

*/
function phoneticLookup(val) {
  const tabla = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  return tabla[val];
}

phoneticLookup("charlie");
