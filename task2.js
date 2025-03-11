const fs = require('fs');

// Чтение файла
fs.readFile('data.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    // Разделение содержимого на строки
    const lines = data.split('\n');

    // Извлечение заголовков
    const headers = lines[0].split(',');

    // Парсинг данных
    const users = lines.slice(1).map(line => {
        const values = line.split(',');
        const user = {};
        headers.forEach((header, index) => {
            user[header] = header === 'age' ? parseInt(values[index], 10) : values[index];
        });
        return user;
    });

    // Сортировка по возрасту
    users.sort((a, b) => a.age - b.age);

    // Вывод результата
    console.log(users);
});