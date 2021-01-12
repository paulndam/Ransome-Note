/** @format */

// Ransome Note

// function can spell
// given an array of words, write a function that determines if words in that
// array could make up a word or match a corresponding given word.

function canSpell(magazine, word) {
    const dictionary = {};
  
    magazine.forEach((element) => {
      if (dictionary[element] === undefined) {
        dictionary[element] = 0;
      }
      dictionary[element]++;
    });
  
    for (let characters in word) {
      const letters = word[characters];
  
      if (dictionary[letters] === undefined || dictionary[letters] <= 0) {
        return false;
      }
      dictionary[letters]--;
    }
    return true;
  }
  
  console.log(canSpell(["a", "b", "c", "d", "e", "f", "g", "h"], "bed"));//true
  console.log(canSpell(["a", "b", "c", "d", "e", "f", "g", "h"], "cat"));//false
  console.log(canSpell(["a", "b", "c", "d", "e", "f", "g", "h"], "had"));//true
  