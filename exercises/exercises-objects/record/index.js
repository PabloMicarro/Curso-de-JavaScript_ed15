const collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

/*
function updateRecords(object, id, prop, value) {
  // ¿Es value un string vaciío?
  if (value === "") {
    // Value SI es un string vacío
    console.log(`Borro la prop ${prop} del album ${id}`);
    object[id][prop] = null;
  } else {
    //Value NO es un string vacío
    // ¿La prop es tracks?
    if (prop === "tracks") {
      // La prop SI es tracks

      //¿Existe ya tracks?
      if (object[id][prop] != null) {
        //Tracks SI existe
        console.log(
          "La prop introducida es tracks y como SI existe, añado el valor al final de array"
        );
        object[id][prop].push(value);
      } else {
        //Tracks NO existe
        console.log(
          "La prop introducida es tracks y como NO existe, creo el array y añado el valor"
        );
        object[id].tracks = [value];
      }
    } else {
      // La prop NO es tracks
      //   ¿Existe la ID?
      if (object[id] != null) {
        console.log(
          `la ID ${id} SI existe, actualizo el álbum con la prop y el valor corresponidiente`
        );
        object[id][prop] = value;
      } else {
        console.log(`la ID ${id} NO existe y no se añadir el nuevo álbum`);
        // RESUELTO POT IVÁN:
        object[id] = {
          [prop]: value,
        };
      }
    }
  }

  return object;
}
*/

function updateRecords(object, id, prop, value) {
  if (value === "") {
    object[id][prop] = null;
  } else if (prop === "tracks") {
    object[id]["tracks"] = object[id]["tracks"] || [];
    object[id]["tracks"].push(value);
  } else {
    object[id][prop] = value;
  }
  return object;
}
// IMPRIMIR LAS TRACKS
/*
const albums = Object.values(collection);

albums.forEach((album) => {
  if (album.tracks != null) {
    album.tracks.forEach((track) => console.log(track));
  }
});
*/

/* 
Nuevo array con nombre de artista y título del álbum

const newArray = Object.values(collection).map((album) => {
  if (album.artist != null && album.albumTitle != null) {
    return {
      [album.artist]: album.albumTitle,
    };
  }
});

console.log(newArray);

*/
