
//si aucun choix selectionné alors formulaire 1 & 2 vérouillé
//si choix 1 selectionné alors formulaire 2 verouillé
//si choix 2 selectionné alors formulaire 1 vérouillé

//constente de selection
const form = document.querySelectorAll('form');

const h1 = document.querySelector('h1')
//const  = document.querySelectorAll('')

const user1 = document.getElementById('user1').value;
const user2 = document.getElementById('user2');

const user = document.getElementById('userNumber').options.length;
const userNumber = document.getElementById('userNumber');
console.log(document.getElementById('userNumber').options[1])
console.log(userNumber.length);
console.log(userNumber);



  /*********************************/
//function selectUser(){
//  if('userNumber'.option[1]){
//    section[1].classList.add("section2_1");
  //  console.log(section.classList);
//  }else{
 //  .style2...
//  }
// }

function selectUser(){
  form[1].classList.add("section2_1");
  h1.classlist.add("section2_1");
  console.log(form[1].classList)
}

function displayPseudo1(){
  const pseudo1 = document.getElementById('pseudo1');
  const displayPseudo1 = pseudo1.value;    
  document.getElementById("displayPseudo").innerText = displayPseudo1;
  console.log("utilisateur 1  pseudo : " + displayPseudo1);     
}

function displayPseudo2(){
  const pseudo2 = document.getElementById('pseudo2');
  const displayPseudo2 = pseudo2.value;
  document.getElementById("displayPseudo").innerText = displayPseudo2;
  console.log("utilisateur 2  pseudo : " + displayPseudo2);
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
  console.log("utilisateur 2 message : " + displayMessage2 );
}

//appel au dom
soumettre2.addEventListener('click', displayMessage1(),displayMessage2() , displayPseudo1(), displayPseudo2());

// ajout de la fonction sur le select
userNumber.addEventListener('select', selectUser());
console.log('JavaScript bien chargé');
