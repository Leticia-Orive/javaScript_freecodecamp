//Colección de registros
/* Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección está organizada como un objeto que contiene varios álbumes que también son objetos. Cada álbum está representado en la colección con un único idcomo nombre de propiedad. Dentro de cada objeto de álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La updateRecordsfunción toma 4 argumentos representados por los siguientes parámetros de función:

records- un objeto que contiene varios álbumes individuales
id- un número que representa un álbum específico en el recordsobjeto
prop- una cadena que representa el nombre de la propiedad del álbum para actualizar
value- una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Complete la función usando las reglas a continuación para modificar el objeto pasado a la función.

Su función siempre debe devolver el recordsobjeto completo.
Si valuees una cadena vacía, elimine la proppropiedad dada del álbum.
Si propno es tracksy valueno es una cadena vacía, asigne el valueal de ese álbum prop.
Si propes tracksy el valor no es una cadena vacía, agregue al valuefinal de la matriz del álbum tracks. Primero debe crear esta matriz si el álbum no tiene una trackspropiedad.
Nota:recordCollection Se utiliza una copia del objeto para las pruebas. No debe modificar directamente el recordCollectionobjeto.*/
//Ejercicio
/* Después updateRecords(recordCollection, 5439, "artist", "ABBA"), artist debería ser la cadena.ABBA
Después de updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks debe tener la cadena Take a Chance on Mecomo último y único elemento.
Después updateRecords(recordCollection, 2548, "artist", ""), artist no debe establecerse
Después updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks debe tener la cadena Addicted to Love como último elemento.
Después updateRecords(recordCollection, 2468, "tracks", "Free"), tracksdebe tener la cadena 1999 como primer elemento.
Después updateRecords(recordCollection, 2548, "tracks", ""), tracks no debe establecerse
Después updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle debería ser la cadena.Riptide*/

// Setup
const recordCollection = {
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

// Only change code below this line

function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];
  // Update the album
  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  // Return the full collection
  return records;
}
