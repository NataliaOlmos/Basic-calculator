let operationA;
let operationB;
let operation;


function init() {

    const results = document.getElementById('result')
    let reset = document.getElementById('reset')
    let adition = document.getElementById('adition')
    let minus = document.getElementById('minus')
    let multiply = document.getElementById('multiply')
    let divide = document.getElementById('divide')
    let equal = document.getElementById('equal')
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let four = document.getElementById('four')
    let five = document.getElementById('five')
    let six = document.getElementById('six')
    let seven = document.getElementById('seven')
    let eight = document.getElementById('eight')
    let nine = document.getElementById('nine')
    let zero = document.getElementById('zero')




    //events
    one.onclick = function (e) {
        results.textContent = results.textContent + "1"
        console.log("presione 1")
    }
    two.onclick = function (e) {
        results.textContent = results.textContent + "2"
    }
    three.onclick = function (e) {
        results.textContent = results.textContent + "3"
    }
    four.onclick = function (e) {
        results.textContent = results.textContent + "4"
    }
    five.onclick = function (e) {
        results.textContent = results.textContent + "5"
    }
    six.onclick = function (e) {
        results.textContent = results.textContent + "6"
    }
    seven.onclick = function (e) {
        results.textContent = results.textContent + "7"
    }
    eight.onclick = function (e) {
        results.textContent = results.textContent + "8"
    }
    nine.onclick = function (e) {
        results.textContent = results.textContent + "9"
    }
    zero.onclick = function (e) {
        results.textContent = results.textContent + "0"
    }
    reset.onclick = function (e) {
        resetNum();
    }
    adition.onclick = function (e) {
        operationA = results.textContent;
        operation = "+";
        clear();
    }
    minus.onclick = function (e) {
        operationA = results.textContent;
        operation = "-";
        clear();
    }
    multiply.onclick = function (e) {
        operationA = results.textContent;
        operation = "*";
        clear();
    }
    divide.onclick = function (e) {
        operationA = results.textContent;
        operation = "/";
        clear();
    }

    equal.onclick = function (e) {
        operationB = results.textContent;
        resolve()
    }

    function clear() {
        results.textContent = "";
    }

    function resetNum() {
        results.textContent = "";
        operationA = 0
        operationB = 0
        operation = ""
    }

    function resolve() {
        let res = 0;
        switch (operation) {
            case "+":
                res = parseFloat(operationA) + parseFloat(operationB);
                break;
            case "-":
                res = parseFloat(operationA) - parseFloat(operationB);
                break;
            case "*":
                res = parseFloat(operationA) * parseFloat(operationB);
                break;
            case "/":
                res = parseFloat(operationA) / parseFloat(operationB);
                break;
        }

        resetNum();
        results.textContent = res;
    }
}