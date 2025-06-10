const textarea = document.getElementById('orcamento');

function autoResize() {
  textarea.style.height = 'auto';
  textarea.style.height = Math.max(500, textarea.scrollHeight) + 'px';
}

textarea.addEventListener('input', autoResize);
textarea.addEventListener('paste', function () {
  setTimeout(autoResize, 0);
});

// Inicializa com altura mínima
autoResize();

function gerarPDF() {
  window.print();
}
