function forLoop([array]){
  var array = [];
  for (let i = 0; i < 25; i++) {
    if(i===0){
      array.push(“I am 1 strange loop.”);
    } else {
      array.push(“I am ${i} strange loop.”)
      }
    }
    return array;
}


function whileLoop(number) {
while (number > 0) {
console.log(–number);
}
return “done”;
}
function doWhileLoop(array){
function maybeTrue() {
return Math.random() >= 0.5
}

do {
array.pop();
} while (array.length > 0 &&maybeTrue());
return array;

}
