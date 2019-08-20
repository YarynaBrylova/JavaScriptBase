//парні числа на проміжку [0, 200]
for ( let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
};

let i = 0;
do { if ( i % 2 === 0){
    console.log(i);
    }
    i++;
} while (i <= 200);

let j = 0;
while (j <= 200) {
    if (j % 2 === 0){
        console.log(j);
    }
    j++;
};

//кратні віку
const age = 23;
let counter = 0;
for (let i = 1; i <= 1000; i++) {
    if ( i % age === 0) {
        counter +=1;
    } 
};

console.log("counter", counter);


let k = 1;
let amount = 0;
while (k <= 1000) {
    if (k % age === 0) {
            amount +=1;
        }
   k++;
};
console.log("amount", amount);


//максимальний і мінімальний елемент масиву
const arr = [-4, -8, -2, 0, -9, -5, -13, -33, -28, -6, -100, -200];

function MaxValue(arr) {
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    console.log("MaxElement =", maxElement);
}

function MinValue(arr) {
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    console.log("MinElement =", minElement);
}

MaxValue(arr);
MinValue(arr);

//перетворює рядок в масив 
const str = "Якщо ви не здаєтесь, це має значення";

function returnArray(str) {
    return str.split(" ");
}

console.log(returnArray(str));


//ввід з клавіатури
const input = document.getElementById("numbers");
const submit = document.getElementById("submit");
const min = document.getElementById("min");
const indexOfMax = document.getElementById("index_of_max");
const double = document.getElementById("double");
const negative = document.getElementById("negative");


const theMostNumberIndex = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == Math.max.apply(Math, arr)) {
            return i;
        }
    }
};

const doubleNumber = function(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter += 1;
        }
    }
    return counter;
};

const negativeNumbers = function(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter += 1;
        }
    }
    return counter;
};



submit.addEventListener("click", function() {
    let arr = input.value;
    let myArray = arr.split(',');
    console.log(myArray);
    let minNumber = Math.min.apply(Math, myArray);

    min.innerText = minNumber;
    indexOfMax.innerText = theMostNumberIndex(myArray);
    double.innerText = doubleNumber(myArray);
    negative.innerText = negativeNumbers(myArray);
});
