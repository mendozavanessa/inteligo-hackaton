$(document).ready(function() {
  getNews3();
  function handleError1() {
    console.log('Se ha presentado un error');
  }
  function getNews3() {
    console.log('hola clau y meli');
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `https://newsapi.org/v2/everything?q=${localStorage.categorys}&sources=el-mundo&apiKey=5bc8597ff85946f48100561b36f359b6`);
    articleRequest.onload = addNews3;
    articleRequest.onerror = handleError1;
    articleRequest.send();
  }
  function addNews3() {
    let data1 = JSON.parse(this.responseText);
    console.log(data1);
    let article1 = data1.articles;
    console.log(article1[0]);
    let title2 = article1[localStorage.idNoticia].title;
    let description2 = article1[localStorage.idNoticia].description;
    let imagenNews = article1[localStorage.idNoticia].urlToImage;
    let news2 = `<div class="col s12 m7">
    <span class="header">${title2}</span>
    <div class="card horizontal">
      <div class="card-image">
        <img src="${imagenNews}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p class="descriptionNews">${description2}</p>
        </div>
        <div class="card-action">
          <a class="linkNews" href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>`;
    $('.news-container').append(news2);
  };
  $(function() {
    $('#rateYo').rateYo({
      rating: 3.6
    });
  });
});
