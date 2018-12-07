function showHideInstructions(){
  $('#how-to-play').on("click", e => {
    e.preventDefault();
    $('#player-instructions ul, #close-instructions').removeClass('sr-only');
  })

  $('#close-instructions').on("click", e => {
    e.preventDefault();
    $('#player-instructions ul, #close-instructions').addClass('sr-only');
  })
}

$(showHideInstructions);
