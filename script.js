const studendgrades = document.querySelector('#studendgrades');
const grades = [];

for (let i = 0; i < 12; i++) {
    grades.push(Math.ceil(Math.random()*100))
}

studendgrades.innerHTML = `Оценки студентов: ${grades.join(', ')}`;

function findAverage(acc, item, index, arr) {
    let sum = acc + item;
    if (index === arr.length - 1) {
    return sum / arr.length;
    }
    return sum
}

const average = Math.round(grades.reduce(findAverage, 0));

studendgrades.innerHTML += `<p>Средняя оценка: ${average}</p>`;

studendgrades.innerHTML += `<p>Максимальная оценка: ${Math.max(...grades)}</p>`;

studendgrades.innerHTML += `<p>Минимальная оценка: ${Math.min(...grades)}</p>`;

let positiveGrages = grades.filter(el=>el>=60);
studendgrades.innerHTML += `<p>Количество студентов, получивших положительную оценку (больше или равно 60): ${positiveGrages.length}</p>`;

let negativeGrages = grades.filter(el=>el<60);
studendgrades.innerHTML += `<p>Количество студентов, получивших отрицательную оценку (меньше 60): ${negativeGrages.length}</p>`;

const gradesLetter = grades.map(function (elem) {
if ((elem >= 80) && (elem <= 100)) {
    elem = 'A';
} else if ((elem >= 60) && (elem <= 79)) {
    elem = 'B';
}
else if ((elem >= 40) && (elem <= 59)) {
    elem = 'C';
}
else if ((elem >= 20) && (elem <= 39)) {
    elem = 'D';
}
else {elem = 'E';
}
return elem
}
);
studendgrades.innerHTML += `<p>Оценки студентов в буквенном выражении: ${gradesLetter.join(', ')}</p>`;


