
//Ex 1--------------------


var corps = document.querySelector("body");//sélectionne le body
corps.classList.remove("bg-aqua");//retire classe "aqua" au body
corps.classList.add("bg-olive");//ajoute le classe "bg-olive" au body

var firstParagraph = document.querySelector("#first-paragraph")//selection ID firstParagraph
firstParagraph.classList.remove('bg-lime', "gray");// lui retire la classe bg-lime bg gray
firstParagraph.classList.add("aqua");//lui rajoute la classe "aqua"

var silver = document.querySelectorAll(".bg-silver");//selectionne tout les éléments avec la classe bg-silver
silver.forEach (function(item){
  item.classList.replace("bg-silver", "bg-teal");// remplace la classe bg-silver par bg-teal
});

var blockquote = document.querySelectorAll ("blockquote");//selectionne blockquote
blockquote.forEach (function(item){
  item.classList.add("bg-white");// ajoute la classe white
});

//Ex2---------------------
let table = document.querySelector("#my-table");  // selectionne l'id my-table
table.classList.add("bg-purple");// lui ajoute la classe bg-purple

let container = document.querySelectorAll(".container p");//selection tout les "p" ds container
container.forEach (function (item) {
  item.classList.add("shadow");// leur ajoute la classe shadow
});

//Ex3------------

let allPre = document.querySelectorAll("pre");
allPre.forEach(function(item){
  item.style.color = "white";
  item.style.backgroundColor = "lightblue";
  item.style.borderTop = "3px solid red";
  item.style.borderBottom ="3px solid red";
})

let firstH3 = document.querySelector ("h3");
firstH3.innerHTML = "<em>Itelic title ! yeah  !<em>";

let firstH2 = document.querySelector ("h2");
firstH2.innerText = "<strong>HTML doens't work !</strong>";

//Ex4--------------------
let liste = document.getElementsByTagName("ul")[0];
let nouveauLi = document.createElement ("li");
nouveauLi.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
liste.appendChild (nouveauLi);
let firstLien = nouveauLi.getElementsByTagName("a")[0];
firstLien.style.color = "red";

//Ex 5-----------------
let liste2 = document.getElementsByTagName ("ol")[0];
let childList = liste2.children;
for (var i = childList.length - 1; i >= 0; i--) {
  liste2.removeChild(childList[i]);
};

let codes = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (var i = 0; i < codes.length; i++) {
let newLi = document.createElement ("li");
newLi.innerText = codes[i];
liste2.appendChild (newLi);
};
