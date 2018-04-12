const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews2();
});

function handleError() {
  console.log('Se ha presentado un error');
}
function getNews2() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://newsapi.org/v2/everything?q=${searchedForText}&sources=cnn-es&apiKey=5bc8597ff85946f48100561b36f359b6`);
  articleRequest.onload = addNews2;
  articleRequest.onerror = handleError;
  articleRequest.send();
}
function addNews2() {
  let data = JSON.parse(this.responseText);
  console.log(data);
  let article = data.articles;
  console.log(article);
  for (var i = 0; i < article.length; i++) {
    let title = article[i].title;
    let description = article[i].description;
    let imagen = article[i].urlToImage;
    let news= `<div class="row">
    <div class="col s12 m7">
    <div class="card">
 <div class="card-image waves-effect waves-block waves-light">
   <img class="activator" src=${imagen}>
 </div>
 <div class="card-content">
   <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
   <p><a href="#">This is a link</a></p>
 </div>
 <div class="card-reveal">
   <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
   <p>${description}</p>
 </div>
</div>
    </div>
  </div>`

    /*`  <div class="row" >


      <div class="col s6" >
    <img src=${imagen} class="img-search">
    </div>
    <div class="col s6" >
<h6>${title}</h6>
<p>${description}</p>
    </div></div>`
    /*let news = '<li><h2>' +
     article[i].title + '</h2><p>' + article[i].description +
     '</p><p><a href='+ article[i].url +
      '>Leer mas</a></p><img src=' + article[i].urlToImage + '>  </li>';*/
    $('#response-container').append(news);
  }
}
