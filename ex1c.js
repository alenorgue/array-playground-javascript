/**
 * Dado el array de peces
 */

let peces = ["Dory", "Nemo", "Estrella"];

/**
 * Modifica la primera posición del array 'peces'. Cambia a "Dory" por "Tory". 
 */
peces.shift();
peces.unshift("Tory"); 

console.log(peces); // ["Tory", "Nemo", "Estrella"]
