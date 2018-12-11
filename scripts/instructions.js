function showHideInstructions(){
  $('#how-to-play').on("click", e => {
    e.preventDefault();
    $('#player-instructions ul, #close-instructions').toggleClass('sr-only');
  })
}

$(showHideInstructions);
