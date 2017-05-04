// générer un clavier
var clavier = document.querySelector(".clavier");
for (char of "0123456789-+*%") {
    clavier.innerHTML += "<button class='touche' value=''>" + char + "</button>";
}



//click sur les touches elles s'affichent dans l'input resultat

var btnPresse = document.querySelectorAll(".touche");

for (var i = 0; i < btnPresse.length; i++) {
    btnPresse[i].addEventListener("click", toucheSurEcran);
}

var affichage = document.querySelector('.affichage');

function toucheSurEcran (){
    var presse = this.innerHTML;
    affichage.value += presse;
   
}
 
// bouton resultat
var btnEgal  =document.querySelector(".egal");
btnEgal.addEventListener('click', afficheResultat);

function afficheResultat() {
   var final = eval(affichage.value);
    affichage.value += "=" + final; 
    
}

// bouton reset

var btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", effaceTout);

function effaceTout (){
    var vide = affichage.value;
    affichage.value="";
}
