/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

array1 = [1, 2, 3];
array2 = [4, 5, 6];

const concat = (arr1, arr2) => [...arr1, ...arr2];
console.log(concat(array1, array2));


/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

array1 = [1, 2, 3];

const push = (arr, item) => [...arr,4]
console.log(push(array1));

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

objet1 = { a: 1, b: 2 };
objet2 = { c: 3, d: 4 };

const merge = (obj1, obj2) => ({...obj1 , ...obj2 })
console.log(merge(objet1, objet2));
/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

obj = { name: 'toto' };

const setName = (obj, name) => { return { ...obj, name } }
console.log(setName(obj, 'titi'));

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = { concat, push, merge, setName }