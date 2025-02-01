const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))
function filtrarLivros() {
    const eBtn = document.getElementById(this.id)
    const categoria = eBtn.value
    const livrosFiltrados = categoria == 'disponivel' ? livros.filter
    (livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)
}