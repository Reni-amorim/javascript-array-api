const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))
function filtrarLivros() {
    const eBtn = document.getElementById(this.id)
    const categoria = eBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)
}