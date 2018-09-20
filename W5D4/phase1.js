
// madLib
function madLib(verb, adj, noun){
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

madLib('make', 'best', 'guac');

// isSubstring
function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");

// Phase II
function fizzBuzz(array) {
  var arr = [];

  for(let x = 0; x < array.length; x++){
    let current = array[x];
    console.log(current)

    if (current % 3 == 0 && current % 5 != 0) {
      arr.push(current);
    }
    else if (current % 3 != 0 && current % 5 == 0) {
      arr.push(current);
    }
  }
  return arr;
}

fizzBuzz([1,2,3,5,15,7,8]);

function isPrime(number){
  if (number < 2){
    return false;
  }
  else {
    for(let x = 2; x < number; x++){
      if (number % x == 0){
        return false;
      }
    }
  }
  return true;
}


function sumNPrimes(number){
  let arr = [];
  let i = 0;
  while (arr.length < number) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i ++;
  }

  let sum = 0;
  for(let x = 0; x < arr.length; x++){
    sum += arr[x];
  }
  return sum;
}
