var displayview;

function buttonclick(num) {
    displayview = document.calc.display.value += num;
}

function clean() {
    document.calc.display.value = '';
}

function backspace() {
    displayview = document.calc.display.value;
    document.calc.display.value = displayview.substring(0, displayview.length - 1);
}

function percent() {
    displayview = document.calc.display.value;
    document.calc.display.value = displayview * 0.01
}

function result() {
    displayview = document.calc.display.value;
    if(displayview){
        document.calc.display.value = eval(displayview);
    }
}