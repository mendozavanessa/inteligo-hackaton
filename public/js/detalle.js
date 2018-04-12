$('.postext').on('click', function () {
  var $content = $('#textarea1').val();
  $('.content-text').append('<div class="col l10 offset-l1 posteando card flow-text s12">' + $content + '<br><br><span class="grey-text">Publicado a las :' + getTime() + '</span><br><a href="#!" class="secondary-content like"><i id="heart" class="material-icons">favorite_border</i></a></div>');
  $('#test4').append('<div class="col l10 offset-l1 posteando card flow-text s12">' + $content + '<br><br><span class="grey-text">Publicado a las :' + getTime() + '</span><br><a href="#!" class="secondary-content like"><i id="heart" class="material-icons">favorite_border</i></a></div>');
  $('#textarea1').val('');
  // $('.like i').click(function() {
  //   $(this).text('favorite');
  // });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      firebase.database().ref('usuarios').child(user.uid).child('post').push({
        textpost: $content
      });

    }
  })
});