// n1 then operator then n2
// clicking number again will override

var num1=''; var num2; var mathOp;
// do i need them as global or loca var??

// create event listerner for numbers
var allNum = document.getElementsByClassName('number');
for (var i=0; i<allNum.length; i++) {
  allNum[i].addEventListener('click', function (event) {
    num1 = num1+this.value;
    // concat numbers prssed in case we wanna do "75"
    // return OR num1 = value OR local var ??
  })
}

// create event listerner for operator
var allOps = document.getElementsByClassName('operator');
for (var i=0; i<allOps.length; i++) {
  allOps[i].addEventListener('click', function (event) {
    mathOp = this.value;
  })
}


//create event listerner for equal



// create event listerner for clear















// function add(x,y) {

// }
// function subtract(x,y) {

// }
// function divide(x,y) {
  
// }
// function multiply(x,y) {

// }
// function clear() {

// }