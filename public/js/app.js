$(document).ready(function() {
  $('#login').on('click', function() {
    var email = $('#email').val();
    var password = $('#password').val();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        $(location).attr('href', 'view-3.html');
        $('.perfil').attr('src', '../assets/images/foto1.jpg');
      })
      .catch(function(error) {
        alert('Ingrese correo y contraseña valido ');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  });
});
  