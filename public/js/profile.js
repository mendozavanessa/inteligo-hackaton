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
  console.log(data);
  console.log(Object.keys(data));
  var arrData = Object.keys(data);
  var mappedItems = arrData.map(function(element, index) {
    var replacement = $('<li class="likes">').html('<a class="waves-effect waves-light btn-large">' + (index + 1) + '</a>' + element);
    console.log(index);
    return replacement;
  });
  $('.list').append(mappedItems);
  $('.likes').click(function() {
    window.location.href = 'topics.html';
  });
});
