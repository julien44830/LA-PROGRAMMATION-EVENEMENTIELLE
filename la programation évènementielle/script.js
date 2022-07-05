//constente de selection

const userNumber = document.getElementById('userNumber');

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

// Quand une nouvelle <option> est selectionnée
var index = selectElem.selectedIndex ;

//bloquer les buttons
const button2 = document.getElementById('soumettre2');
button2.disabled = true;

selectElem.addEventListener('change', function() {
  const element = document.getElementById("section1");
  const element2 = document.getElementById("section2");
  const button1 = document.getElementById('soumettre1');
  
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  
  const pseudo1 = document.getElementById('pseudo1');
  const pseudo2 = document.getElementById('pseudo2');
  
  const message1 = document.getElementById('message1');
  const message2 = document.getElementById('message2');

  pElem.innerHTML = 'utilisateur ' + selectElem.value + ' selectionné';
  if (selectElem.value == 1){
    // activation / desactivation des button et champ formulaire
    button2.disabled = true;
    button1.disabled = false;

    pseudo1.disabled = false;
    pseudo2.disabled = true;

    message1.disabled = false;
    message2.disabled = true;
    // ajout des class
    button1.classList.add("buttonSelect");
    button2.classList.add("buttonNoSelect");
    form1.classList.add("form");

    //suppression des class
    button2.classList.remove("buttonSelect");
    button1.classList.remove("buttonNoSelect");
    form2.classList.remove("form");

  }else{
    // activation / desactivation des button
    button1.disabled = true;
    button2.disabled = false;

    pseudo1.disabled = true;
    pseudo2.disabled = false;

    message1.disabled = true;
    message2.disabled = false;

    // ajout des class
    button2.classList.add("buttonSelect");
    button1.classList.add("buttonNoSelect");
    form2.classList.add("form");

    //suppression des class
    button1.classList .remove("buttonSelect");
    button2.classList .remove("buttonNoSelect");   
    form1.classList.remove("form");
  }
}) 

console.log("selectElem index = " + index);
console.log("selectElem value = " + selectElem.value);

// futur ajout : liste de message