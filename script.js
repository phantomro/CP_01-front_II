var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')
var tituloInputElemento = document.querySelector('#titulo')
var textoInputElemento = document.querySelector('#texto')
var fotoInputElemento = document.querySelector('#foto')

var posts = []



novaPostagemElemento.addEventListener('click', (event) => {

  event.preventDefault();

  let postagem = {
    titulo: document.getElementById('titulo').value,
    foto: document.getElementById('foto').value,
    texto: document.getElementById('texto').value
  }

  posts.push(postagem)

  containerElemento.innerHTML += `
        <div class="item">
          <img src="${postagem.foto}">
          <h2>${postagem.titulo}</h2>
          <p>${postagem.texto}</p> 
        </div>`


  fotoInputElemento.value = " "
  tituloInputElemento.value = " "
  textoInputElemento.value = " "

  console.log(posts)

})

for (let post of posts) {

  containerElemento.innerHTML += `
  <div class="item">
  <img src="${postagem.foto}">
  <h2>${postagem.titulo}</h2>
  <p>${postagem.texto}</p> 
</div>`

}