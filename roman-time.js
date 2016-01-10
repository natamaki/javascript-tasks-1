var hours = process.argv[2];
var minutes = process.argv[3];

if (Number(hours) === 0) {
    console.log("Нуля среди римских цифр нет");
    return;
}

if (!Number(hours) || !Number(minutes)) {
    console.log("Время необходимо указать числами");
    return;
}

if (hours > 23 || minutes > 59) {
    console.log("Время указано не верно");
    return;
}

var numbers = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L'
};

function getRomanNumber (time) {
    var tens = Math.floor(time/10); //получение целого числа десятков
    var units = time - tens*10; //получение целого числа единиц

    var tensArabical = '';
    if (tens) {
        if (tens >= 1 && tens <= 3) {
            tensArabical = concatSameSymbols(numbers[10], tens);
        } else if (tens === 4) {
            tensArabical = numbers[10] + numbers[50]
        } else {
            tensArabical = numbers[50]
        }
    }

    var unitsArabical = '';
    if (units) {
        if (units >= 1 && units <= 3) {
            unitsArabical = concatSameSymbols(numbers[1], units);
        } else if (units >= 4 && units <= 8) {
            var val = units % 5;

            if (val >= 1 && val < 4) {
                unitsArabical = numbers[5] + concatSameSymbols(numbers[1], val);
            } else if (val === 0) {
                unitsArabical = numbers[5];
            } else {
                unitsArabical = numbers[1] + numbers[5];
            }
        } else if (units === 9) {
            unitsArabical = numbers[1] + numbers[10];
        }
    }

    return tensArabical + unitsArabical;
}

function concatSameSymbols (symbol, amount) {
    var str = '';
    for (i = 1; i <= amount; i++) {
        str = str + symbol;
    }
    return str;
}

var result = getRomanNumber(hours) + ':' + getRomanNumber(minutes);
console.log(result);
