function displayWord(word){
  $("#show-jumble h2").html(word);
}

function displayDefinition(str){
  $("#definition p").html(str);
}

function displayMessages(str){
  $('#user-messages').html(str);
}

function displayErrors(str){
  $('#errors').html(str);
}

function displayGuesses(arr){
  $('#guess-list').html(arr);
}
