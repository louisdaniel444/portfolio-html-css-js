// Déclaration d'une variable

// On peut modifier la valeur de la variable
let pseudo = "Da";
// on peut ajouter une valeur à la variable
pseudo += " whouaf";
// On peut afficher la valeur de la variable
console.log(pseudo);

// Déclaration d'une constante
// On ne peut pas modifier la valeur de la constante
const age = 53;
// On peut afficher la valeur de la constante
console.log(age);

// Appel de la fonction
direBonjour(pseudo, age);

// Déclaration d'une fonction
function direBonjour(pseudo, age) {
  // Déclaration d'une constante
  const ageLimite = 18;
  // Condition
  if (age >= ageLimite) {
    // Affichage de la valeur de la variable
    console.log("salut à toi " + pseudo + " tu as " + age);
  } else {
    // Affichage de la valeur de la variable
    console.log("tu n,as pas l,age requis");
  }
}