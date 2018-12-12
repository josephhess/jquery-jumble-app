function displayWord(word){
  $("#show-jumble h2").html(word);
}

function displayDefinition(str){
  $("#definition p").html(str);
}

function displayMessages(str){
  $('#messages').removeClass('sr-only');
  $('#user-messages').html(str);
}

function displayErrors(str){
  $('#messages').removeClass('sr-only');
  $('#errors').html(str);
}

function displayGuesses(arr){
  $('#guess-list').html(arr);
}
