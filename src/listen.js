const zahlen = [1, 5, 7, 8];

//gib mal alle Zahlen in der console aus
//Schleife for, foreach, while, for...un, for...of, do...while

//for (let index = 0; index < zahlen.length; index++) {
//  console.log(zahlen[index]);}

//foreach schleife
//zahlen.forEach((zahl) => console.log(zahl));

//For (let index = 0; index < zahlen.length; index++){
//   console.log(zahlen[index]);}

//Map gibt einen neuen Array zurück
//const square = zahlen.map((zahl) => zahl * zahl);
//square.forEach((zahl) => console.log(zahl));

// const array = [];
// const square2 = zahlen.forEach((zahl) => array.push(zahl));
// console.log(square2);

//FILTER IST FREUND VON MAP läuft über array und wendet die filterbedingung an und gibt ein neues array zurück

const zahlenUnterZehn = zahlen.filter((zahl) => zahl < 10);
console.log(zahlenUnterZehn);

//weiterer freund von map ist reducer
// const reduce = zahlen.reduce((zahl) => (zahl += zahl));
