function watchGetGuessSubmit(){
  $('#guess-form').on('submit', e => {
    e.preventDefault();
    const guess = $('#guess').val();
    setLocalStorage('currentGuess', guess);
  })
}


$(watchGetGuessSubmit);
