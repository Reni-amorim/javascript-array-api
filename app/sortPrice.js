let btnSortPrice = document.getElementById('btnOrdenarPorPreco')
btnSortPrice.addEventListener('click', sortBooksPrice)

function sortBooksPrice() {
    let sortedBooks = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(sortedBooks)
}
