// exo1

const pi=Math.PI;
let nom="youla";
age=20;
console.log("voici la valeur de pi : " + pi);
console.log("je m'appelle : " + nom + "\n et j'ai : " + age+ "ans");

// exo2

let  numberVar = 42; 
let stringVar = "if you wanna another goat you gotta clone me"; 
let booleanVar = true; 
let undefinedVar; 
let nullVar = null; 

console.log("Type de numberVar:", typeof numberVar); 
console.log("Type de stringVar:", typeof stringVar); 
console.log("Type de booleanVar:", typeof booleanVar); 
console.log("Type de undefinedVar:", typeof undefinedVar); 
console.log("Type de nullVar:", typeof nullVar); 

// exo3

let a = 15;
let b = 4;

let addition;
let soustraction;
let multiplication;
let division;
let reste;

addition = a + b;
soustraction = a - b;
multiplication = a * b;
division = a / b;
reste = a % b;

console.log("Addition de a et b:", addition);
console.log("Soustraction de b à a:", soustraction); 
console.log("Multiplication de a par b:", multiplication); 
console.log("Division de a par b:", division); 
console.log("Reste de la division de a par b:", reste); 

// exo4
// sans parenthèses 
let precop1 = 3 * 4 + 5;
console.log("Résultat :", precop1);

// avec parenthèses 

let precop2= 3 * (4 + 5);
console.log("Résultat :", precop2);

// exo5

let firstname=" Mamadouba ";
let lastname=" youla";

let fullname= firstname + lastname;

console.log(fullname, typeof fullname);

// exo6

let prenom = "mamadouba";
let name = "youla";
let adje = 25;
let str = `Je m'appelle ${prenom} ${name} et j'ai ${adje} ans.`;
console.log(str); 

// exo7 

let x = 10;
let y = 15;

// Comparaisons
let estPlusGrand = x > y;
let estEgal = x === y;
let estInferieurOuEgal = x <= y;

console.log("x est plus grand que y:", estPlusGrand); 
console.log("x est égal à y:", estEgal); 
console.log("x est inférieur ou égal à y:", estInferieurOuEgal); 

// exo8

let note = 15;

if (note >= 16) {
    console.log("Excellent");
} else if (note >= 14 && note <= 15) {
    console.log("Bien");
} else if (note >= 12 && note <= 13) {
    console.log("Assez bien");
} else if (note >= 10 && note <= 11) {
    console.log("Passable");
} else {
    console.log("Insuffisant");
}

//  other way ... user can enter himself the value of the mark ...just i wanted to try it ... we use prompt ... 
// but after gotta convert prompt into number cause default it returned string value 


// let note1 = prompt("Entrez votre note (entre 0 et 20) :");
// note1 = parseFloat(note1);

//  exo9

let age2=20;
let statut;

console.log(age2>=18?statut="majeur":statut="mineur");

// ou encore in this way ...

let age3 = 20; 
let Status = age3 >= 18 ? "majeur" : "mineur";
console.log("Statut:", Status);

// exo10

let texteNombre = "42";
let nombre = Number(texteNombre);
nombre += 8;
console.log("Résultat après ajout de 8:", nombre); 
let texteResultat = nombre.toString();
let message = texteResultat + " est la réponse.";
console.log(message); 







