'use strict';

const modal=document.querySelector('.modal')
const overlay= document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal= document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)

// un ecouteur d'evenement sur le boutton btnCloseMod
btnCloseModal.addEventListener('click', function(){
    overlay.classList.add('hidden')  // on cache l'overlay ensuite on cache le modal ici car quand on ferme le modal on veut aussi fermer l'overlay ici on utilise le evenement click sur btn close modal pour cela.  // on utilise la methode remove car on veut ajouter une class qui n'existe pas et donc ne fera rien si elle existe déjà.  // on utilise la
    modal.classList.add('hidden')
    
    
})

// un ecouteur d'evenement sur btns open modal avec la boucle for on doit parcourir la boucle parce là il s'agit d'un tableau...

for(let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', function(){
        overlay.classList.remove('hidden')
        modal.classList.remove('hidden')
        
        
    })
}
// on peut faire du refactoring de code ici avec le corps de ces fonctions 

const closeModal= function(){
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
}

const openModal=function(){
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}

document.addEventListener("keydown",function(e){
    if(e.key=== " "){
        if(modal.classList.contains('hidden')){
            openModal()
        }
        else{
            closeModal()
        }
    }    
    
})
    
