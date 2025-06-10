const textarea = document.getElementById('orcamento');

function autoResize() {
  // Redefine altura para capturar o scrollHeight corretamente
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// Aciona o redimensionamento em diferentes eventos
textarea.addEventListener('input', autoResize);
textarea.addEventListener('paste', () => setTimeout(autoResize, 0));
window.addEventListener('load', autoResize); // Caso o textarea venha preenchido

function gerarPDF() {
  window.print();
}
