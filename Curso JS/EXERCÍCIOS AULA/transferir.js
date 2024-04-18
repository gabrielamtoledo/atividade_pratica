function livro(titulo, autor, genero, nDePaginas, nota, editora, ano) {
    this.titulo = titulo
    this.autor = autor;
    this.genero = genero;
    this.nDePaginas = nDePaginas;
    this.nota = nota;
    this.editora = editora
    this.ano = ano
}

const livro1 = new livro("Tudo é Rio", "Carla Madeiro", "ficção", 210, 4.8, 'Record', 2021);
const livro2 = new livro("Essencialismo", "George McKeown", "autoajuda", 272, 4.8, 'Sextante', 2015);
console.log(livro1)
console.log(livro2)

