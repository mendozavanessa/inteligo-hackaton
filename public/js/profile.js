  $(document).ready(function() {
    var database = firebase.database();
    $('.sidenav').sidenav();
    $('.likes').click(function() {
      window.location.href = 'topics.html';
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $('#email-profile').text(user.email)
       
     
      } else {
       
      }
    });
  
  });
 