
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
  articleRequest.open('GET', `https://newsapi.org/v2/everything?q=${searchedForText}&sources=el-mundo&apiKey=5bc8597ff85946f48100561b36f359b6`);
  articleRequest.onload = addNews2;
  articleRequest.onerror = handleError;
  articleRequest.send();
}
function addNews2() {
  let data = JSON.parse(this.responseText);
  let article = data.articles;
  for (var i = 0; i < article.length; i++) {
    let title = article[i].title;
    let description = article[i].description;
    let imagen = article[i].urlToImage;
    let news = `

    <div class="col s12 m4 flex">

      <div class="card card1">
        <div class="card-image">
          <img src=${imagen} class="img-search">
          <a class="btn-floating halfway-fab waves-effect waves-light blue-btn"><i class="material-icons">keyboard_arrow_right</i></a>
        </div>
        <div class="card-content">
          <span class="card-title">${title}</span>
        </div>
      </div>
    </div>
`;

    /* `<div class="row">
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
  </div>`;*/
    $('#response-container').prepend(news);
  }
}


/* ***************************************************************************************** */

getNews3();
function handleError1() {
  console.log('Se ha presentado un error');
}
function getNews3() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://newsapi.org/v2/everything?q=${localStorage.categorys}&sources=el-mundo&apiKey=5bc8597ff85946f48100561b36f359b6`);
  articleRequest.onload = addNews3;
  articleRequest.onerror = handleError1;
  articleRequest.send();
}
function addNews3() {
  let data1 = JSON.parse(this.responseText);
  let article1 = data1.articles;
  for (var i = 0; i < article1.length; i++) {
    let title1 = article1[i].title;
    let description1 = article1[i].description;
    let imagen1 = article1[i].urlToImage;
    let news1 = `
    <div class="col s12 m4 flex">
      <div class="card card1">
        <div class="card-image">
          <img src=${imagen1} class="img-search">
          <a class="btn-floating halfway-fab waves-effect waves-light blue-btn arrow" id="${i}"><i class="material-icons">keyboard_arrow_right</i></a>
        </div>
        <div class="card-content">
        <span class="card-title">${title1}</span>
        </div>
      </div>
    </div>
  `;


    $('#response-container').append(news1);
  }
  $('.arrow').on('click', function() {
    localStorage.idNoticia = $(this).attr('id');
    window.location.href = 'news.html';
  });
}
