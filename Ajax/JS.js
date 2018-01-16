var req = new XMLHttpRequest();//lance requête HTML
let dataLoad = function (){//fonction qui se lance quand la requête est chargé.
  let dataText = req.responseText;//Met le texte reçu dans une variable
  let dataObject = JSON.parse(dataText);//transforme cette variable(txt) en objet
  manipulateData(dataObject);
  console.log(dataObject);
  console.log(catA);
  console.log(catB);
  console.log(catC);
  console.log(bahrain);
  console.log(dataObject[dataObject.length-1].score);
  console.log(dataObject[0].score);
}

req.onload = dataLoad;
req.open('GET', 'data.json', true);
req.send(null);

//ex 2----------------- rajoute un score aléatoire

let addNumberRdm = function (data){
  data = data.map(object=>{
  object.score = Math.floor(Math.random()*1001);
  })

}
//Ex 3 -------------- met dans l'ordre
let scoreOrder = function (data){
  data.sort (function(a,b){
    return a.score-b.score;
  })
}
//ex 4 -------- place dans trois catégorie
let catA = [];
let catB = [];
let catC = [];

let categorie = function (data){
  data.forEach (function(element){
    if (element.score > 750){
      catA.push(element);
    }
    else if (element.score >500) {
      catB.push(element);
    }
    else {
      catC.push(element);
    }
  })
}

// Ex 5-------- filtre les personne = à "Bahrain"
let bahrain = [];

let filtreBahrain = function (data){
  bahrain = data.filter(word => word.country == "Bahrain");
}
//Ex 6 afficher le plus grand score
//ex 7 en haut en console.log
//Ex 8 afficher les différente donné dans fichier HTML aevc createElement

let afficherHTML = function(data){
  let body = document.querySelector("body");
  let afficherBahrain = document.createElement("p");
  let afficherMax = document.createElement("p");
  let afficherMin = document.createElement("p");
  afficherBahrain.innerText = bahrain.length;
  afficherMax.innerText = data[data.length-1].score;
  afficherMin.innerText = data[0].score;
  body.appendChild(afficherBahrain);
  body.appendChild(afficherMax);
  body.appendChild(afficherMin);

}



let manipulateData = function(data){
  addNumberRdm(data);
  scoreOrder (data);
  categorie (data);
  filtreBahrain(data);
  afficherHTML(data);
}
