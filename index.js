const csv = require('csv-parser')
const fs = require('fs');
const results = [];

fs.createReadStream('cars.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', () => fs.writeFileSync('cars.json', JSON.stringify(results, null, 2)));


const records = require('./iris.json');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './iris.csv',
    header: [
        {id: 'sepalLength', title: 'sepalLength'},
        {id: 'sepalWidth', title: 'sepalWidth'},
        {id: 'petalLength', title: 'petalLength'},
        {id: 'petalWidth', title: 'petalWidth'},
        {id: 'species', title: 'species'}
    ]
});
csvWriter.writeRecords(records);