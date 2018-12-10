function watchGetGuessSubmit(){
  $('#guess-form').on('submit', e => {
    e.preventDefault();
    displayErrors('');
    const guess = $('#guess').val();
    const solution = getLocalStorage('rawWord');
    if (guess.length === solution.length){
      // setLocalStorage('currentGuess', guess);
      compareGuessToSolution(guess);
    } else {
      displayErrors('Your guess is not the same length as the clue');
    }
  })
}


function compareGuessToSolution(guess){
  const guesses = JSON.parse(getLocalStorage("guess-list"));
  const solution = getLocalStorage("rawWord").toLowerCase();
  const definition = getLocalStorage("definition");
  const result = guess.localeCompare(solution);

  if (result === 0){
    $('#user-messages').addClass('happyWinAnimation');
    $('#user-messages').addClass('happyWinScale');
    displayMessages('You guessed it!');
    displayDefinition(definition);
  } else {
    if(guesses.includes(guess.toLowerCase())){
      displayErrors("You have already guessed that word, please try a new word");
    } else {
      guesses.push(guess.toLowerCase());
      guessCounter(guesses);
    }
  }
}

function guessCounter(guesses){
  currentCount = guesses.length;
  const solution = getLocalStorage('rawWord');
  const definition = getLocalStorage('definition');
  const guessListString = `Your guesses:  ${guesses.join(', ')}`;

  if(currentCount >= 5){
    displayMessages(`Sorry, the word is ${solution}, please reset game and choose a new word`);
    displayGuesses(guesses);
    displayDefinition(definition);
  } else if ( currentCount === 4) {
    displayMessages("You have one guess left! Definition hint will be shown if available");
    displayGuesses(guessListString);
    displayDefinition(definition);
    setLocalStorage("guess-list", JSON.stringify(guesses));
  } else {
    displayGuesses(guessListString);
    displayMessages(`You have used ${currentCount} guesses`);
    setLocalStorage("guess-list", JSON.stringify(guesses));
  }
}

$(watchGetGuessSubmit);
