$('#reset-game-button').on('click', e => {
  e.preventDefault();
  resetGame();
})

function resetGame(){
  removeLocalStorage('rawWord');
  removeLocalStorage('currentGuess');
  removeLocalStorage('guessCount');
  removeLocalStorage('jumble');
  setLocalStorage('rawWord', '')
  setLocalStorage('guess-list', JSON.stringify([]));
  setLocalStorage('definition', 'Sorry, we dont have a definition for this word');
  displayWord('');
  displayMessages('');
  displayDefinition('Definition, if available, will go here after 4 guesses');
  displayGuesses('');
  displayErrors('');
  $('#messages').addClass('sr-only');
}
