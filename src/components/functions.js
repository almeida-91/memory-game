export function shuffle(array) {
  let m = array.length,
    temp,
    rand;

  while (m) {
    rand = Math.floor(Math.random() * m--);

    temp = array[m];
    array[m] = array[rand];
    array[rand] = temp;
  }

  return array;
}

export function checkAlreadyClicked(clickedArray, element) {
  return clickedArray.includes(element);
}
