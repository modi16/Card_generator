import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let suite = ["heart", "diamond", "spade", "shamrock"];
let number = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "K"];

let final_number = myFunction(number);
let card_suite = myFunction(suite);

function add_class() {
  let element = document.querySelector(".card");
  element.classList.add(card_suite);
}

function change_color() {
  let el = document.getElementById("card-number");
  switch (card_suite) {
    case "heart":
    case "diamond":
      el.style.color = "red";
      break;
    default:
      el.style.color = "black";
  }
}

window.onload = () => {
  document.querySelector("#card-number").innerHTML = final_number;
  add_class();
  change_color();
};

function myFunction(a) {
  var x = a[Math.floor(Math.random() * a.length)];
  return x;
}
