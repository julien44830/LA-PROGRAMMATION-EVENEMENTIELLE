//constente de selection
const button = document.querySelectorAll('button');

const user1 = document.getElementById('user1').value;
const user2 = document.getElementById('user2');

const user = document.getElementById('userNumber').options.length;
const userNumber = document.getElementById('userNumber');

console.log(document.getElementById('userNumber').options[1])
console.log(userNumber.length);
console.log(userNumber);
console.log(h1);

function displayPseudo1(){
  const pseudo1 = document.getElementById('pseudo1');
  const displayPseudo1 = pseudo1.value;    
  document.getElementById("displayPseudo").innerText = displayPseudo1;
  console.log("utilisateur 1  pseudo : " + displayPseudo1);   
}

function displayMessage1(){
  const message1 = document.getElementById('message1');
  const displayMessage1 = message1.value;
  document.getElementById("displayMessage").innerText = displayMessage1;
  console.log("utilisateur 1 message : " + displayMessage1 );
}

function displayPseudo2(){
  const pseudo2 = document.getElementById('pseudo2');
  const displayPseudo2 = pseudo2.value;
  document.getElementById("displayPseudo2").innerText = displayPseudo2;
  console.log("utilisateur 2  pseudo : " + displayPseudo2);
}

function displayMessage2(){
  const message2 = document.getElementById('message2');
  const displayMessage2 = message2.value;
  document.getElementById("displayMessage2").innerText = displayMessage2;
  console.log("utilisateur 2 message : " + displayMessage2 );
}

//appel au dom
soumettre2.addEventListener('click', displayMessage1(),displayMessage2() , displayPseudo1(), displayPseudo2());

console.log('JavaScript bien chargé');

/*             partie du select           */
/******************************************/


var selectElem = document.getElementById('userNumber');
var pElem = document.getElementById('p');

var index = selectElem.selectedIndex ;
// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener('change', function() {
  // Rapporter cette donnée au <p>
  pElem.innerHTML = 'utilisateur ' + selectElem.value + ' selectionné';
}) //ajoute toujours +1 à l'index quoi qu'il arrive

console.log(index);

console.log(selectElem);

if (selectElem.value === 1){
  

}else{

}
