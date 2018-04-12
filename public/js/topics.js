$(document).ready(function () {
  $('.sidenav').sidenav();
  console.log(data['Gustos y Preferencias'].Topico);
  console.log(Object.keys(data['Gustos y Preferencias'].Topico));
  var arrTopics = Object.keys(data['Gustos y Preferencias'].Topico);
  var arrImgTopics = [
    'https://sportadictos.com/files/2017/03/Cules-son-los-beneficios-de-hacer-deporte-por-la-maana.jpg',
    'https://pmcvariety.files.wordpress.com/2018/01/phantom-of-the-opera-broadway.jpg?w=1000&h=563&crop=1',
    'https://http2.mlstatic.com/whisky-johnnie-walker-tragos-y-licores-al-por-mayor-y-menor-D_NQ_NP_653372-MPE26114252077_102017-F.jpg',
    'https://i0.wp.com/elplacerdelalectura.com/wp-content/uploads/2016/03/42088_I_teatro.jpg?resize=770%2C605',
    'http://www.gamba.fm/wp/wp-content/uploads/2018/01/arte.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQMH2Pa-1mXAQfKXInmLcdS5Elrzl4Z3tPexUSu881luA1Gr7'
  ];
  var mappedItems = arrTopics.map(function (element, index) {
    var replacement = $('<li class="circle-topics col s5" data-id=' + index + '>').html('<img src=' + arrImgTopics[index] + '> ' + element);
    console.log(index);
    return replacement;
  });
  $('.list-topics').append(mappedItems);
  for (var i = 0; i > arrTopics; i++) {
    $('.list-topics li').click(function () {
      debugger
      if ($(this).data.id == arrTopics.i) {
        console.log(i);
      }
    })
  }
});