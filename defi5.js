// Écrivez une fonction appelée compterB qui prend une chaîne comme seul argument 
// et renvoie un nombre indiquant combien de caractères B majuscules se trouvent dans la chaîne.

function compterB(mot) {
    let count=0;
    for(let i=0; i<mot.length; i++) {
        if(mot[i] === 'B') {
            count++;
        }
    }
    
    return count;
}

console.log(compterB("BoB")); 

// Ensuite, écrivez une fonction appelée compterChar qui se comporte comme compterB, sauf qu'elle prend un deuxième argument qui indique le caractère à compter (plutôt que de compter uniquement les caractères B majuscules

function compterChar(mot, char) {
    let count=0;
    for(let i=0; i<mot.length; i++) {
        if(mot[i] === char) {
            count++;
        }
    }
    
    return count;
}

console.log(compterChar("kakkerlak", "k")); 

// Réécrivez compterB pour utiliser cette nouvelle fonction.
function compterB(mot) {
    return compterChar(mot,"B");
}

console.log(compterB("Bonjour"))