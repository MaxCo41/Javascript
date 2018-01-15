
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
