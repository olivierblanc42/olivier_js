
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const array = [1, 2, 3];

const multiplyByTwo = (array) => array.map(i => i * 2)
console.log(multiplyByTwo(array));

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const arrayString = ["Avion", "Allemand", "hélicoptère", "net"];


const filterNameStartByA = (array) => array.filter(word => word[0] === "A")
//const filterNameStartByA = (array) => array.filter(word => word.startsWith("A") )

console.log(filterNameStartByA(arrayString));
/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const arraySum = [1, 2, 3];

const sum = array => array.reduce((accumulator, currentValue) =>
  accumulator + currentValue
  , 0);
console.log(sum(arraySum));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const arrayFind = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Foo' },
  { id: 4, name: 'Bar' },
]
const findUserById = (array, id) => array.find(element => element.id === id).name;
console.log(findUserById(arrayFind, 3));


module.exports = { multiplyByTwo, filterNameStartByA, sum, findUserById };