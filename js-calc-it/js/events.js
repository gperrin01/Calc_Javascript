// n1 then operator then n2
// clicking number again will override

var num1; var bucket; var mathOp; var eq; var result;
 var displayResult = document.getElementsByClassName('display')[0];
function initialize() {
   num1='';  bucket='';  mathOp='';  eq='';  result=0;
   displayResult.value = 0;
}
initialize();

// var num1=''; var bucket=''; var mathOp=''; var eq=''; var result=0;

// create event listerner for numbers + concat numbers prssed in case we wanna do "75"
var allNum = document.getElementsByClassName('number');
for (var i=0; i<allNum.length; i++) {
  allNum[i].addEventListener('click', function (event) {
    num1 += this.value;
    displayResult.value = num1;
  })
}

// create event listerner for operator, store num1 value into a bucket and reset value of num1
var allOps = document.getElementsByClassName('operator');
for (var i=0; i<allOps.length; i++) {
  allOps[i].addEventListener('click', function (event) {
    bucket = num1;
    mathOp = this.value;
    num1 = '';
    displayResult.value = mathOp;
  })
}

//create event listerner for equal and return the result
document.getElementsByClassName('eq')[0].addEventListener('click', function (event) {
  eq = this.value;
  bucket = parseInt(bucket);
  num1 = parseInt(num1);
  switch (mathOp){
    case '+':
      result = bucket + num1;
      break;
    case '-':
      result = bucket - num1;
      break;
    case 'x':
      result = num1 * bucket;
      break;
    case '/':
      result = bucket / num1;
      break;
  }
  // var displayResult = document.getElementsByClassName('display')[0];
  // debugger;
  displayResult.value = result;
})

// create event listerner for clear
document.getElementsByClassName('clear')[0].addEventListener('click', function (event){
  initialize();
});
  
