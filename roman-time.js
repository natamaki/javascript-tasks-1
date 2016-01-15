var hours = Number(process.argv[2]);
var minutes = Number(process.argv[3]);

var numbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};

if (isNaN(hours) || isNaN(minutes)) {
    throw new Error('Время нужно указать числами');
}

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59  ) {
    throw new Error('Время указано неверно');
}

function getRomanNumbers (time) {
    if (time === 0) {
        return '-';
    }

    var tensCalc = Math.floor(time/10)*10;
    var tensRoman = tensCalc ? numbers[tensCalc] : '';

    var unitsCalc = time - tensCalc;
    var unitsRoman = unitsCalc ? numbers[unitsCalc] : '';

    return tensRoman + unitsRoman;
}

console.log(getRomanNumbers(hours) + ':' + getRomanNumbers(minutes));
