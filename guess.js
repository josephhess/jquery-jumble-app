function watchGetGuessSubmit(){
  $('#guess-form').on('submit', e => {
    e.preventDefault();
    const guess = $('#guess').val();
    setLocalStorage('currentGuess', guess);
    compareGuessToSolution();
  })
}


function compareGuessToSolution(){
  const guess = getLocalStorage("currentGuess").toLowerCase();
  const solution = getLocalStorage("rawWord").toLowerCase();
  const definition = getLocalStorage("definition");
  const result = guess.localeCompare(solution);

  if (result === 0){
    $("#messages p").html('You guessed it!');
    $("#definition p").html(definition);
  } else {
    guessCounter();
  }
}

function guessCounter(){
  currentCount = getLocalStorage("count");
  currentCount++;
  const messageLocation = $('#messages');
  const definitionLocation = $('#definition p');
  const solution = getLocalStorage('rawWord');
  const definition = getLocalStorage('definition');

  if(currentCount === 5){
    messageLocation.html(`Sorry, the word is ${solution}`);
    definitionLocation.html(definition);
  } else if ( currentCount === 4) {
    messageLocation.html("You have one guess left! Definition hint will be shown if available");
    definitionLocation.html(definition);
    setLocalStorage("count", 5);
  } else {
    messageLocation.html(`You have used ${currentCount} guesses`);
  } setLocalStorage("count", currentCount);
}

$(watchGetGuessSubmit);
