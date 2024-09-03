
//TODO Sette op knapp funksjonalitet
function save_as_file() {
  const textarea = document.querySelector('textarea')

  if (textarea.value.trim() !== '') {
    console.log("Idea Sent");
  }
}
document.getElementById("buttoninput").addEventListener("click", save_as_file)
