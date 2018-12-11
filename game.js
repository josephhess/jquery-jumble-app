function watchGetGuessSubmit(){
  $('#guess-form').on('submit', e => {
    e.preventDefault();

    displayErrors('');
    input = $('#guess');
    const guess = input.val();
    input.val('');
    const solution = getLocalStorage('rawWord');

    if (guess.length === solution.length){
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
    displayMessages('You guessed it!');
    guesses.push(guess);
    console.log(guesses);
    displayGuesses(guessListString(guesses));
    displayDefinition(`Definition: ${definition}`);
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
  // const guessListString = `Your guesses:  ${guesses.join(', ')}`;

  if(currentCount >= 5){
    displayMessages(`Sorry, the word is ${solution}, please reset game and choose a new word`);
    displayGuesses(guessListString(guesses));
    displayDefinition(`Definition: ${definition}`);
  } else if ( currentCount === 4) {
    displayMessages("You have one guess left! Definition hint will be shown if available");
    displayGuesses(guessListString(guesses));
    displayDefinition(`Definition: ${definition}`);
    setLocalStorage("guess-list", JSON.stringify(guesses));
  } else {
    displayGuesses(guessListString(guesses));
    displayMessages(`You have used ${currentCount} guesses`);
    setLocalStorage("guess-list", JSON.stringify(guesses));
  }
}


function guessListString(guesses){
  return `Your guesses:  ${guesses.join(', ')}`;
}
$(watchGetGuessSubmit);
