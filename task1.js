const fs = require('fs');

// Чтение файла
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    // Разделение содержимого на строки
    const lines = data.split('\n');

    // Вывод строк с номерами
    lines.forEach((line, index) => {
        console.log(`${index + 1}: ${line}`);
    });
});