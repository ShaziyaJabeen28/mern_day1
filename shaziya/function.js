function add(a, b) {
    return a + b;
}

let result = add(9, 3)
console.log(result)


//odd or even
function compare(a) {
    if (a % 2 == 0) {
        console.log("Number is even")
    }
    else {
        console.log("number is odd")
    }
}

compare(result)

//arrow function
var add = (a, b) => {
    var sum = a + b;
    console.log(sum)
}

add(9, 13)