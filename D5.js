/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log(
  "--------------------------------------------Esercizio 01--------------------------------------------"
);

const pets = ["dog", "cat", "hamster", "redfish"];

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(
  "--------------------------------------------Esercizio 02--------------------------------------------"
);

var x = pets.sort();

console.log(x);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(
  "--------------------------------------------Esercizio 03--------------------------------------------"
);

var y = pets.reverse();

console.log(y);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log(
  "--------------------------------------------Esercizio 04--------------------------------------------"
);

const pets2 = ["dog", "cat", "hamster", "redfish"];

pets2.push("dog");
pets2.shift(); //DA RIVEDERE PER TROVARE UNA FORMULA UNIVERSALE.

console.log(pets2);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log(
  "--------------------------------------------Esercizio 05--------------------------------------------"
);

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//let licensePlate = licensePlate[" "]

//cars.concat(licensePlate);

//console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log(
  "--------------------------------------------Esercizio 06--------------------------------------------"
);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log(
  "--------------------------------------------Esercizio 07--------------------------------------------"
);

const justTrims = [];

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log(
  "--------------------------------------------Esercizio 08--------------------------------------------"
);
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log(
  "--------------------------------------------Esercizio 09--------------------------------------------"
);

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
let numeri = 0;

while (i <= 13) {
  console.log((numeri = numericArray[i]));
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log(
  "--------------------------------------------Esercizio 10--------------------------------------------"
);

const charactersArray = ["g", "n", "u", "z", "d"];

let Position = [""]

switch(charactersArray){
  case 0:
    charactersArray = [0];
  console.log("Position: 12")
  break;
}
  
 /* case 1:
    );
  break;
  
  case 2:
    posizione = 19;
  break;

  case 3:
    posizione = 21;
  break;

  case 4:
    posizione = 5;
  break; */


