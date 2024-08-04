//  exo1

let Mamadoutaille=75;
let Mamadoumasse= 1.70;
let Fantataille=65;
let Fantamasse=1.60;

let MamadouIMC = Mamadoumasse / Mamadoutaille ** 2;
let FantaIMC = Fantamasse / Fantataille ** 2;

console.log( " voici l'imc de Mamadou : " + MamadouIMC.toFixed(2));
console.log( " voici l'imc de Fanta : " + FantaIMC.toFixed(2));
let MamadouIMCPlusEleve;

if (MamadouIMC > FantaIMC)  {

    MamadouIMCPlusEleve=true;
    console.log(MamadouIMCPlusEleve); 

}else{
    MamadouIMCPlusEleve=false;
    console.log(MamadouIMCPlusEleve); 
}

// exo 2 

let montant = 50000;
const usd=8700;

let montantconverse= montant / usd;
console.log(montantconverse.toFixed(2));

// exo 3

let note1=14;
let note2=16;
let note3=18;

let moy= (note1 + note2 + note3) / 3;
console.log(moy);


