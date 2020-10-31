let actualId = 0;

function genId() {
  return ++actualId;
}

const contacts = {
  favorites: [],
  list: {},
};

function addContact(contact) {
  contacts.list[contact.id] = contact;
}

function addFavorite(contact) {
  contact.favorites.push(contact.id);
}

function retrieveFavorites() {
  contact.favorites.map((id) => contact.list[id]);
}

function deleteFavorite(contact) {
  contact.favorites = contact.favorites.filter((id) => id !== contact.id);
}

function genContact(name, surname, phones, email, image) {
  return {
    id: genId(),
    name: name,
    surname: surname,
    phones: phones != null ? phones : [],
    email: email != null ? email : null,
    image: image != null ? image : null,
  };
}

function updateName(id, name) {
  contacts.list[id].name = name;
}

function updateSurname(id, surname) {
  contacts.list[id].surname = surname;
}

function updateEmail(id, email) {
  contacts.list[id].email = email;
}

function updateImage(id, image) {
  contacts.list[id].image = image;
}

function addPhone(id, phone) {
  contacts.list[id].phones.push(phone);
}

function updatePhone(id, phone) {
  const newPhones = contacts.list[id].phones.filter(
    (_phone) => _phone.value !== phone.value
  );

  newPhones.push(phone);

  contacts.list[id].phones = newPhones;
}
