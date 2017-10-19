const { test } = require('ava');
const fs = require('fs-extra');
const xlsx = require('xlsx');

const { extractWorkbookHeaders } = require('.');

test('open xlsx file', t => {
  return fs.readFile('./sample.xlsx').then(file => {
    const workbook = xlsx.read(file);

    const headers = extractWorkbookHeaders(workbook);

    t.deepEqual(headers, [
      {
        name: 'People',
        headers: [
          'ID',
          'First Name',
          'Last Name',
          'Email',
          'Created',
          'City',
          'Favorite Animal'
        ]
      },
      {
        name: 'Transactions',
        headers: [
          'Transaction ID',
          'Category',
          'Amount',
          'Card Type',
          'Card Number',
          'Date',
          'Company'
        ]
      }
    ]);
  });
});

test('open csv', t => {
  return fs.readFile('sample.csv').then(file => {
    const workbook = xlsx.read(file);

    // console.log(extractWorkbookHeaders(workbook));

    t.pass();
  });
});
