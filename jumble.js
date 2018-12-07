function jumbleWord(word){
  let arr = word.split('');
  let shuffled = shuffle(arr);
  let jumble = shuffled.join('');
  return jumble;
}

function shuffle(array){
  let currentIndex = array.length, tempVal, randVal;
  while (0 !== currentIndex){
    randVal = generateRandomNumber(currentIndex);
    currentIndex -= 1;

    tempVal = array[currentIndex];
    array[currentIndex] = array[randVal];
    array[randVal] = tempVal;
  }
  return array;
}


function generateRandomNumber(max){
   return Math.floor(Math.random() * max)
}

