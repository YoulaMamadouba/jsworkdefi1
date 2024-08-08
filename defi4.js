//  first step

function printAmount() {
    console.log(amount.toFixed(2));
}
let amount = 79.891;
printAmount();
// Elle affiche la valeur contenue dans la variable amount avec deux chiffres après la virgule

amount *= 2;


printAmount();

// Elle affiche le double de la valeur initiale de la variable amount avec deux chiffres après la virgule

// secondth step 

function printAmount(amt) {
	console.log( amt.toFixed( 2 ) );
}


let amt=90.121;

function formatAmount(amt) {

	return amt.toFixed( 2 ); 
}

amt=formatAmount(amt);



// La fonction printAmount prend le paramètre amt qui est utilisé sous forme ici d'argument . 

// formatAmount retourne une chaîne qui est la valeur de amt arrondie à deux décimales. Cela permet de formater la valeur sans l'afficher directement.

// third steps  


let secondamount = 100
const TAX_RATE= 0.14 ; // 14 % 

function calculateFinalPurchaseAmount (secondamount) {

    return secondamount + (secondamount * TAX_RATE);

}

//  la valeur de la constante Tax_Rate est la valeur qui lui est assignée tout en haut là 0.14 cest à dire 14%
console.log(calculateFinalPurchaseAmount(secondamount))

// la valeur finale d'amount cest 114

// forth step 

function one() {
	var a = 1;
	console.log(a);
}

function two() {
	var a = 2;
	console.log(a);
}

one(); // Affiche "1"
two(); // Affiche "2"

//Les variables a  n'interfèrent pas l'une avec l'autre car la portée du mot clé var est de type fonction ce qui les rend locales à la fonction .

function outer() {
	var a = 1;

	function inner() {
		var b = 2;
		console.log(a + b); // Affiche "3"
	}

	inner();
	console.log(a); // Affiche "1"
}

outer();


// la fonction  inner est dans la fonction outer (fonction dans une fonction), elle a donc accès aux variables de outer.

// outer ne peut pas accéder à b car b n'est pas dans sa portée .


