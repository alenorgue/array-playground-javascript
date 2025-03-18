/**
 * Contar cuántas veces salió un 6 en los dados
 * 
 * En Mario Party, los jugadores lanzan un dado del 1 al 6. 
 * Dado un array con los resultados de varios lanzamientos, devuelve cuántas veces salió un 6.
 */

function countSixes(rolls) {
    return rolls.filter(roll => roll === 6).length;
    // RECUERDA: PRIMERO escribe lo que hay que hacer con tus palabras. Luego, viene el código. Primero usar filter para encontrar los 6 dentro del array, luego usar .lenght para el nuevo array. pero no me funciona si lo pongo en otra linea, preguntado a chat para resolver esta parte
}

// Ejemplo de uso:
console.log(countSixes([1, 2, 6, 4, 6, 5])); // 2 -> Salieron dos 6
console.log(countSixes([6, 6, 6, 6, 6]));   // 5 -> Todos fueron 6
console.log(countSixes([1, 2, 3, 4, 5]));   // 0 -> No salió ningún 6
console.log(countSixes([6, 3, 6, 6, 2]));   // 3 -> Hay tres veces el número 6