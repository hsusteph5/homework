//simple timeout
window.setTimeout(function(){
  alert("HAMMERTIME");
}, 5000);


//timeout plus closure
function hammerTime(time){
  window.setTimeout(function(){
    console.log(`${time} is hammertime!`)
  });
}

//Some tea? Some biscuits
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits (callback) {
  let first, second;

  reader.question('Would you like some tea?', (response1) => {
    first = response1;
    reader.question('Would you like some biscuits?', (response2) => {
      second = response2;
      console.log(`You replied ${response1}.`);
      console.log(`You replied ${response2}.`);

      callback(response1, response2)
    });
  });

}

teaAndBiscuits(function (response1, response2)) {
  const firstRes = (response1 === 'yes') ? 'do' : 'don\'t';
  const secondRes = (response2 === 'yes') ? 'do' : 'don\'t';
  console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
  reader.close();
}
