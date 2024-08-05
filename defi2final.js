// exo1:

const montantFacture = 100; 
const pourcentagePourboire = 15;
const montantPourboire = (montantFacture * pourcentagePourboire) / 100;
const totalAPayer = montantFacture + montantPourboire;
console.log("Montant de la facture : €", montantFacture);
console.log("Pourcentage de pourboire : ", pourcentagePourboire + "%");
console.log("Montant du pourboire : €", montantPourboire.toFixed(2));
console.log("Total à payer : €", totalAPayer.toFixed(2));

// exo2
const TAUX_CHANGE = 0.85; // 1 USD = 0.85 EUR
let montantDollars = 100; 
let montantEuros = montantDollars * TAUX_CHANGE;
console.log("Montant converti en euros : €" + montantEuros.toFixed(2));

// exo3

let poids = 70; // Poids en kg
let taille = 1.75; // Taille en mètres
let imc = poids / (taille * taille);
let categorie;
if (imc < 18.5) {
    categorie = "Sous-poids";
} else if (imc >= 18.5 && imc < 25) {
    categorie = "Poids normal";
} else {
    categorie = "Surpoids";
}
console.log("IMC : " + imc.toFixed(2)); 
console.log("Catégorie : " + categorie);

// exo4

let nombre1 = 25; 
let nombre2 = 30; 
if (nombre1 > nombre2) {
    console.log("Le nombre le plus grand est : " + nombre1);
} else if (nombre1 < nombre2) {
    console.log("Le nombre le plus grand est : " + nombre2);
} else {
    console.log("Les deux nombres sont égaux.");
}

// exo5

const ANNEE_ACTUELLE = 2024; 
let anneeNaissance = 2004; 
let age = ANNEE_ACTUELLE - anneeNaissance;
console.log("L'âge de la personne est : " + age + " ans.");

// exo6

let nombre = 7;
if (nombre % 2 === 0) {
    console.log("Le nombre " + nombre + " est pair.");
} else {
    console.log("Le nombre " + nombre + " est impair.");
}

// exo7

let prixOriginal = 100; 
let pourcentageReduction = 20; 
let montantReduction = (prixOriginal * pourcentageReduction) / 100;
let nouveauPrix = prixOriginal - montantReduction;
console.log("Prix original : " + prixOriginal + " €");
console.log("Montant de la réduction : " + montantReduction + " €");
console.log("Nouveau prix après réduction : " + nouveauPrix + " €");

// exo8

let note = 85;
let mention;

if (note >= 90) {
    mention = "Excellent";
} else if (note >= 80) {
    mention = "Très bien";
} else if (note >= 70) {
    mention = "Bien";
} else if (note >= 60) {
    mention = "Assez bien";
} else if (note >= 50) {
    mention = "Passable";
} else {
    mention = "Insuffisant";
}
console.log("Note : " + note);
console.log("Mention : " + mention);


// exo9

let distance = 150; 
let vitesse = 75;   
let tempsTrajet = distance / vitesse;
console.log("Distance : " + distance + " km");
console.log("Vitesse moyenne : " + vitesse + " km/h");
console.log("Temps de trajet : " + tempsTrajet + " heures");

// exo10

const AGE_MINIMUM_VOTE = 18;
let age1 = 16; 
if (age1 >= AGE_MINIMUM_VOTE) {
    console.log("Vous êtes éligible pour voter.");
} else {
    let anneesRestantes = AGE_MINIMUM_VOTE - age1;
    console.log("Vous n'êtes pas encore éligible pour voter.");
    console.log("Il vous reste " + anneesRestantes + " années avant de pouvoir voter.");
}
