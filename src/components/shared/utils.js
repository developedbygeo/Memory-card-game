export const shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomizer = Math.floor(Math.random() * (i + 1));
    const temporaryElement = array[i];
    array[i] = array[randomizer];
    array[randomizer] = temporaryElement;
  }
  return array;
};
