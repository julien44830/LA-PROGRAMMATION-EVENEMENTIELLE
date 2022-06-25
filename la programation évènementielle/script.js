
//si aucun choix selectionné alors formulaire 1 & 2 vérouillé
//si choix 1 selectionné alors formulaire 2 verouillé
//si choix 2 selectionné alors formulaire 1 vérouillé

//constente de selection
const user1 = document.getElementById('user1');
const user2 = document.getElementById('user2');
console.log(document.getElementById(userNumber.value));



function displayPseudo1(){
  const pseudo1 = document.getElementById('pseudo1');
  const displayPseudo1 = pseudo1.value;    
  document.getElementById("displayPseudo").innerText = displayPseudo1;
  console.log("utilisateur 1 pseudo : " + displayPseudo1);     
}

function displayPseudo2(){
  const pseudo2 = document.getElementById('pseudo2');
  const displayPseudo2 = pseudo2.value;
  document.getElementById("displayPseudo").innerText = displayPseudo2;
  console.log("utilisateur 2 pseudo : " + displayPseudo2);
}

function displayMessage1(){
  const message1 = document.getElementById('message1');
  const displayMessage1 = message1.value;
  document.getElementById("displayMessage").innerText = displayMessage1;
  console.log("utilisateur 1 message : " + displayMessage1 );
}

function displayMessage2(){
  const message2 = document.getElementById('message2');
  const displayMessage2 = message2.value;
  document.getElementById("displayMessage").innerText = displayMessage2;
  console.log("utilisateur2 message : " + displayMessage2 );
}

//appel au dom
soumettre1.addEventListener('click', displayMessage1(),displayMessage2() , displayPseudo1(), displayPseudo2());

console.log('JavaScript bien chargé');

