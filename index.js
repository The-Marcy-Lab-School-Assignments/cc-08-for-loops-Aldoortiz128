//1
function countToTwenty(){
    
for (let i = 0; i <= 20; i++) {
 console.log (i);
}
}

//2
function countFromTwenty(){
    
for (let i = 20; i <= 1; i--) {
  console.log (i);
}
}

//3
function countToN(N){
for (let i = 0; i <= N; i++) {
    console.log (i);
}
}


//4
function countFromN(N){
for (let i = N; i >= 1; i--) {
    console.log (i);
}
}

//5
function countEveryOdd(N){
for (let i = 1; i <= N; i++) {
    if (i % 2) {console.log (i)}
}
}


console.log(countToTwenty());
console.log(countFromTwenty());
console.log(countToN(50));
console.log(countFromN(90));
console.log(countEveryOdd(100));