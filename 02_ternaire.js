
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a, b) {
    return a > b ? 'a est plus grand que b' : " b est plus grand que a";
};

console.log(ternaire(1, 2));

module.exports = ternaire;