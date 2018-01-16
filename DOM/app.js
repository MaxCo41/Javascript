
//Ex 1--------------------


var corps = document.querySelector("body");
corps.classList.remove("bg-aqua");
corps.classList.add("bg-olive");




var firstParagraph = document.querySelector("#first-paragraph")
firstParagraph.classList.remove('bg-lime', "gray");
firstParagraph.classList.add("aqua");

var silver = document.querySelectorAll(".bg-silver");
silver.forEach (function(item){
  item.classList.replace("bg-silver", "bg-teal");
});

var blockquote = document.querySelectorAll ("blockquote");
blockquote.forEach (function(item){
  item.classList.add("bg-white");
});

//Ex2---------------------
let table = document.querySelector("#my-table");
table.classList.add("bg-purple");

let container = document.querySelectorAll(".container p");
container.forEach (function (item) {
  item.classList.add("shadow");
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
