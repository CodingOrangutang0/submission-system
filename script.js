

//TODO Sette op knapp funksjonalitet

document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.querySelector('textarea');
  document.getElementById("buttonsend").addEventListener("click", function() {
    if (textarea.value.trim() !== '') {
      alert(textarea.value);
  }
  };
});
  

