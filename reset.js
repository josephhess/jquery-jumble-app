$('#reset-game-button').on('click', e => {
  e.preventDefault();
  removeLocalStorage('count');
  removeLocalStorage('rawWord');
  removeLocalStorage('currentGuess');
  removeLocalStorage('guessCount');
  setLocalStorage('definition', "Sorry, we don't have a definition for this word")
})
