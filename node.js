 arr = [14, 2, 45, 13, 54, 66, 21, 40]
x = 0
 for (let i = 0; i < arr.length-1;i++) {
    if (x < arr[i] ) {
        x = arr[i]
    }
}
y = 99999
for (let i = 0; i < arr.length-1;i++) {
    if (y > arr[i] ) {
        y = arr[i];
    }
}
console.log("max num",x)
console.log("min num",y)
function myfunc(z,y) {
    calc = Math.pow(z, y);
    return calc;
}
console.log(myfunc(4,4))
let myfunc1 = (z,y) => {
    calc = Math.pow(z, y);
    return calc;
}
console.log(myfunc(4,4))
let gx = 0;
do {
    gx++;
} while(gx !== 5);
console.log(gx)