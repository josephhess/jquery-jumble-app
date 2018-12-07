const WORD_API_URL = 'https://wordsapiv1.p.rapidapi.com/words/?X-RapidAPI-Key=b24651c8f8msh87fc0fa3dfce863p1fd866jsn360608947fde &random=true&letters=';

function watchSubmit(){
  $('#get-word-form').on('submit', function(e){
    e.preventDefault();
    const length = $('#word-length').val();
    getWordFromApi(length);
  })
}

function getWordFromApi(length){
  const requestUrl = `${WORD_API_URL}${length}`;
  const settings = {
    url: requestUrl,
    headers: {
      "X-RapidAPI-Key": "b24651c8f8msh87fc0fa3dfce863p1fd866jsn360608947fde"
    }
  }
  $.ajax(settings, function(res){
    return res;
  })
  .then(function(data){
    displayWord(data.word);
  })
}

function displayWord(word){
  $("#show-jumble h2").html(word);
}

$(watchSubmit);






