
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cadastroForm = document.getElementById("cadastroForm");


openModalBtn.onclick = function() {
  modal.style.display = "block";
}


closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

cadastroForm.onsubmit = function(event) {
  event.preventDefault();

  alert("Seu cadastro foi realizado!");

  modal.style.display = "none";
}