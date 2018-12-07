function watchGetGuessSubmit(){
  $('#guess-form').on('submit', e => {
    e.preventDefault();
    const guess = $('#guess').val();
    const solution = getLocalStorage('rawWord');
    if (guess.length === solution.length){
      setLocalStorage('currentGuess', guess);
      compareGuessToSolution();
    } else {
      displayMessages('Your guess is not the same length as the clue');
    }
  })
}


function compareGuessToSolution(){
  const guess = getLocalStorage("currentGuess").toLowerCase();
  const solution = getLocalStorage("rawWord").toLowerCase();
  const definition = getLocalStorage("definition");
  const result = guess.localeCompare(solution);

  if (result === 0){
    displayMessages('You guessed it!');
    displayDefinition(definition);
  } else {
    guessCounter();
  }
}

function guessCounter(){
  currentCount = getLocalStorage("count");
  currentCount++;
  const solution = getLocalStorage('rawWord');
  const definition = getLocalStorage('definition');

  if(currentCount >= 5){
    displayMessages(`Sorry, the word is ${solution}, please reset game and choose a new word`);
    displayDefinition(definition);
  } else if ( currentCount === 4) {
    displayMessages("You have one guess left! Definition hint will be shown if available");
    displayDefinition(definition);
    setLocalStorage("count", 5);
  } else {
    displayMessages(`You have used ${currentCount} guesses`);
  } setLocalStorage("count", currentCount);
}

$(watchGetGuessSubmit);
