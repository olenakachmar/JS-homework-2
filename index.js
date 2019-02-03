// Варіант 1 Рекурсія
const num = parseFloat(prompt('Please, enter a number', 1));

function fibonacci(num) {
    if (num === 1)
        return 1;
    if (num < 1)
        return 0;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

alert(fibonacci(num));

//Варіант 2 
const num1 = parseFloat(prompt('Please, enter a number', 1));

function fibonacci1(num1) {
    let a = 0
      , b = 1
      , result = b;

    if (num1 === 1)
        return 1;
    if (num1 < 1)
        return 0;
    while (num1 > 1) {
        result = a + b;
        a = b;
        b = result;
        num1--;
    }

    return result;
}

alert(fibonacci1(num1));

//Варіант 3
const num2 = parseFloat(prompt('Please, enter a number', 1));

function fibonacci2(num2) {
    let arr = [1, 1];
    let count = 2;

    if (num2 === 1)
        return 1;
    if (num2 < 1)
        return 0;
    while (count <= num2) {
        let result = (arr[arr.length - 1] + (arr[arr.length - 2]));
        arr.push(result);
        count++;
    }
    return arr[num2 - 1];
}

alert(fibonacci2(num2));
