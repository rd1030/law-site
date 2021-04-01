// messages container on request page
var $messages = $('.messages-content')
var $price = $('.currentPrice')

// function for load messages from database
$(window).load(function () {
  $messages.mCustomScrollbar();

  firebase.database().ref("messages").on("child_added", function (snapshot) {
    let data = new Date();
    let localdata = data.toLocaleString();
    $('<div class="message message-personal"><figure class="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdX6tPX96Zk00S47LcCYAdoFK8INeCElPeJrVDrh8phAGqUZP_g" /></figure><div id="message-'
      + snapshot.key + '">' + '<br>' + 'Имя = ' + snapshot.val().name + 
      '<br>' + 'Дата = ' + localdata + 
      '<br>'+ 'Номер телефона = ' + snapshot.val().phone + 
      '<br><div class="text-block">' + 'Вопрос = ' + snapshot.val().message + 
      '</div><br><button class="btn-delete" data-id="' + snapshot.key + 
      '"onclick="deleteMessage(this);">Delete</button></div></div>').appendTo($('.mCSB_container')).addClass('new');

    $('.message-input').val(null);
    $('.message-input-2').val(null);
    $('.name').val(null);
    $('.phone').val(null);
  });

  firebase.database().ref("price").on("child_added", function (snapshot) {
    $('<div > ' + ' ' +snapshot.val() + 
      '</div>').appendTo($('.currentPrice'));
  
});
});
  

// For first button
function insertMessage() {
  msg = $('.message-input').val();
  phone = $('.phone').val();
  name = $('.name').val();
  if ($.trim(msg) == '')  {
    return false;
  }
// sendMeassage function for connecting to firebase in connectionToFirebase.js
  sendMessage();
}

// For second button
function insertMessage2() {
  msg = $('.message-input-2').val();
  if ($.trim(msg) == '') {
    return false;
  }
  sendMessage();
}

$('.message-submit').click(function () {
  insertMessage();
});

$('.message-submit2').click(function () {
  insertMessage2();
});

$(window).on('keydown', function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

// for send price
