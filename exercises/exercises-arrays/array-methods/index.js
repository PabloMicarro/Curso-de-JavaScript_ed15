const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

/*
- Mapealo a un array de strings: `firstName-lastName: role`
- Filtra aquellos usuarios con role de `Full Stack Resident`
- Reduce el array a un objeto en el que cada propiedad es un `role` y su valor un array con los objetos usuarios que tienen dicho `role`
- Genera una función de búsqueda de un usuario por `firstName` con find.
*/

const stringUsers = JSON.stringify(users);
// const parseUsers = JSON.parse(users);

const FullStackUsers = Object.values(users).filter(
  (value) => value.role === "Full Stack Resident"
);

function search(firstName) {
  const searchUsers = Object.values(users).find(
    (value) => value.firstName === "firstName"
  );

  console.log(searchUsers);
}
