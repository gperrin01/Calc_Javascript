// n1 then operator then n2
// clicking number again will override

var num1=''; var bucket; var mathOp; var eq;
// do i need them as global or loca var??

// create event listerner for numbers + concat numbers prssed in case we wanna do "75"
var allNum = document.getElementsByClassName('number');
for (var i=0; i<allNum.length; i++) {
  allNum[i].addEventListener('click', function (event) {
    num1 += this.value;
  })
}

// create event listerner for operator, store num1 value into a bucket and reset value of num1
var allOps = document.getElementsByClassName('operator');
for (var i=0; i<allOps.length; i++) {
  allOps[i].addEventListener('click', function (event) {
    bucket = num1;
    mathOp = this.value;
    num1 = '';
  })
}

//create event listerner for equal
document.getElementsByClassName('eq').addEventListener('click', function (event) {
  eq = this.value;
})


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