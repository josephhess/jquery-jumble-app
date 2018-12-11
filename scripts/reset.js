$('#reset-game-button').on('click', e => {
  e.preventDefault();
  resetGame();
})

function resetGame(){
  // removeLocalStorage('count');
  removeLocalStorage('rawWord');
  removeLocalStorage('currentGuess');
  removeLocalStorage('guessCount');
  setLocalStorage('guess-list', JSON.stringify([]));
  setLocalStorage('definition', "Sorry, we don't have a definition for this word");
  displayWord('');
  displayMessages('');
  displayDefinition('Definition, if available, will go here after 4 guesses');
  displayGuesses('');
  displayErrors('');
  $('#messages').addClass('sr-only');

}
