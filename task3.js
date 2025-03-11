const fs = require('fs');

// Чтение файла
fs.readFile('log.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    // Разделение содержимого на строки
    const lines = data.split('\n');

    // Объект для статистики
    const stats = { INFO: 0, WARNING: 0, ERROR: 0 };
    const errors = [];

    // Парсинг каждой строки
    lines.forEach(line => {
        const match = line.match(/\[(.*?)\] \[(.*?)\] (.*)/);
        if (match) {
            const [, timestamp, type, message] = match;

            // Обновление статистики
            stats[type]++;

            // Сохранение ошибок
            if (type === 'ERROR') {
                errors.push(`[${timestamp}] ${message}`);
            }
        }
    });

    // Вывод статистики
    console.log('Статистика по логам:');
    console.log(`INFO: ${stats.INFO}`);
    console.log(`WARNING: ${stats.WARNING}`);
    console.log(`ERROR: ${stats.ERROR}`);

    // Вывод списка ошибок
    console.log('\nСписок ошибок:');
    errors.forEach(error => console.log(error));
});