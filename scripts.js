const textarea = document.getElementById('orcamento');

function autoResize() {
  textarea.style.height = 'auto'; // Resetar
  textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar conforme conteúdo
}

// Aplica ao digitar ou colar
textarea.addEventListener('input', autoResize);
textarea.addEventListener('paste', () => setTimeout(autoResize, 0));

// Aplica ao carregar (caso já tenha texto)
window.addEventListener('load', autoResize);

function gerarPDF() {
  window.print();
}
