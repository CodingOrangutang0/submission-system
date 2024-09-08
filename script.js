import productAPI from "./api.json" assert { type: "json" };
import closepopup from "./closepopup.js";
//TODO Sette op knapp funksjonalitet
function save_as_file1() {
  const textarea = document.querySelector('textarea')


  alert('button has been clicked');
}

document.addEventListener('DOMContentLoaded', function() {
  const activate = document.querySelector("ideainput1")
  
  activate.addEventListener('click', () => {
    alert("Button was clicked!");
  });
});  
