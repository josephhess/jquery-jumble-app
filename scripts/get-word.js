const WORD_API_URL = 'https://wordsapiv1.p.rapidapi.com/words/?X-RapidAPI-Key=b24651c8f8msh87fc0fa3dfce863p1fd866jsn360608947fde &random=true&letters=';

function watchGetWordSubmit(){
  $('#get-word-form').on('submit', function(e){
    e.preventDefault();
    const length = $('#word-length').val();
    resetGame();
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
    let jumble = jumbleWord(data.word);
    setLocalStorage('guess-list', JSON.stringify([]));
    setLocalStorage("rawWord", data.word);
    setLocalStorage("jumble", jumble);
    displayWord(`Your jumble is: ${jumble}`);

    if (data.results && data.results[0].definition){
      setLocalStorage("definition", data.results[0].definition)
    } else {
      setLocalStorage("definition", "Sorry, we don't have a definition for this word");
    }
  })
  .catch(e => {
    console.log(e);
    displayErrors('We are having trouble getting a word, please try again');
  })
}

$(watchGetWordSubmit);






