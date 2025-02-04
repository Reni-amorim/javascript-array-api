const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))
function filtrarLivros() {
    const eBtn = document.getElementById(this.id)
    const categoria = eBtn.value
    const livrosFiltrados = categoria == 'disponivel' ? filtrarDisponivel() : filtrarCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcValorLivros(livrosFiltrados)
        exibirValorTotal(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(valorTotal) {
    eValorTotal.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}