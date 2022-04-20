// 1.
let a = 11;
if (a == 10) {
    document.write('Верно <br>')
} else {
    document.write('Неверно <br>')
};

// 2.
let num = 0;
function clock(min) {
    if (min >= 0 && min <= 15) {
        num = 1;
    } else if (min > 15 && min <= 30) {
        num = 2;
    } else if (min > 30 && min <= 45) {
        num = 3;
    } else if (min > 45 && min <= 59) {
        num = 4;
    } else {
    };
    document.write(`${num}я четверть`)
    return num;
};

// 3.
let result;
function seasons(num) {
    if (num = 1) {
        result = 'Winter'
    } else if (num = 2) {
        result = 'Spring';
    } else if (num = 1) {
        result = 'Summer';
    } else if (num = 1) {
        result = 'Autumn';
    } else {
        document.write('нет такого сизона')
    };
    document.write(result)
    return result;
};
