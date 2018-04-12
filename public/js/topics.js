$(document).ready(function() {
  $('.sidenav').sidenav();
  console.log(data['Gustos y Preferencias']);
  console.log(Object.keys(data['Gustos y Preferencias'].Topico));
  var arrTopics = Object.keys(data['Gustos y Preferencias'].Topico);
  var arrImgTopics = [
    'https://sportadictos.com/files/2017/03/Cules-son-los-beneficios-de-hacer-deporte-por-la-maana.jpg',
    'https://pmcvariety.files.wordpress.com/2018/01/phantom-of-the-opera-broadway.jpg?w=1000&h=563&crop=1',
    'https://http2.mlstatic.com/whisky-johnnie-walker-tragos-y-licores-al-por-mayor-y-menor-D_NQ_NP_653372-MPE26114252077_102017-F.jpg',
    'https://i0.wp.com/elplacerdelalectura.com/wp-content/uploads/2016/03/42088_I_teatro.jpg?resize=770%2C605',
    'http://www.gamba.fm/wp/wp-content/uploads/2018/01/arte.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQMH2Pa-1mXAQfKXInmLcdS5Elrzl4Z3tPexUSu881luA1Gr7' ];
  var mappedItems = arrTopics.map(function(element, index) {
    var replacement = $('<li class="circle-topics click-topics col s5" id="' + element + '">').html('<img src=' + arrImgTopics[index] + '> ' + element);
    console.log(index);
    return replacement;
  });
  $('.list-topics').append(mappedItems);
  var arrayCategory = [];
  $('.click-topics').on('click', function(e) {
    console.log(e.target);
    console.log($(this).attr('id'));
    var topics = $(this).attr('id');
    localStorage.topics = topics;
    for (var i = 0; i < data['Gustos y Preferencias'].Topico[topics].length; i++) {
      console.log(data['Gustos y Preferencias'].Topico[topics][i].categoria);
      arrayCategory.push(data['Gustos y Preferencias'].Topico[topics][i].categoria);
      window.location.href = 'category.html';
    }
    console.log(arrayCategory);
  });
  // console.log(data['Gustos y Preferencias'].Topico[localStorage.topics][1].categoria);
  var arrayCat = data['Gustos y Preferencias'].Topico[localStorage.topics][0].categoria;
  var arrVacioCategory = [];
  for (var i = 0; i < data['Gustos y Preferencias'].Topico[localStorage.topics].length; i++) {
    console.log(data['Gustos y Preferencias'].Topico[localStorage.topics][i].categoria);
    arrVacioCategory.push(data['Gustos y Preferencias'].Topico[localStorage.topics][i].categoria);
  }
  console.log(arrVacioCategory);
  var mappedItemsCategory = arrVacioCategory.map(function(element, index) {
    var replacementTwo = $('<li class="circle-topics click-category col s5" id="' + element + '" >').html('<img src=' + data['Gustos y Preferencias'].Topico[localStorage.topics][index].img + '> ' + element);
    console.log(index);
    return replacementTwo;
  });
  $('.list-category').append(mappedItemsCategory);
  $('.click-category').on('click', function(e) {
    console.log($(this).attr('id'));
    var categorys = $(this).attr('id');
    localStorage.categorys = categorys;
    window.location.href = 'detalle.html';
    getNews3();
  });
  function handleError1() {
    console.log('Se ha presentado un error');
  }
  function getNews3() {
   console.log('hola clau y meli');
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `https://newsapi.org/v2/everything?q=golf&sources=cnn-es&apiKey=5bc8597ff85946f48100561b36f359b6`);
    articleRequest.onload = addNews3;
    articleRequest.onerror = handleError1;
    articleRequest.send();
  }
  function addNews3() {
    let data1 = JSON.parse(this.responseText);
    console.log(data1);
    let article1 = data1.articles;
    console.log(article1);
    for (var i = 0; i < article1.length; i++) {
      let title1 = article1[i].title;
      let description1 = article1[i].description;
      let imagen1 = article1[i].urlToImage;
      let news1 = `<div class="row">
    <div class="col s12 m7">
    <div class="card">
 <div class="card-image waves-effect waves-block waves-light">
   <img class="activator" src=${imagen1}>
 </div>
 <div class="card-content">
   <span class="card-title activator grey-text text-darken-4">${title1}<i class="material-icons right">more_vert</i></span>
   <p><a href="#">This is a link</a></p>
 </div>
 <div class="card-reveal">
   <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
   <p>${description1}</p>
 </div>
</div>
    </div>
  </div>`;

      $('#container-details').append(news1);
    }
  }
});
