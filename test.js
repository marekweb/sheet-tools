const { test } = require('ava');
const fs = require('fs-extra');
const xlsx = require('xlsx');

const { extractWorkbookHeaders, extractSheetPreview } = require('.');

test('extractWorkbookHeaders', t => {
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

test('extractSheetHeaders', async t => {
    const file = await fs.readFile('sample.xlsx');
    const workbook = xlsx.read(file);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const preview = extractSheetPreview(sheet);
    
    t.deepEqual(preview, [
      [
        1,
        2,
        3
      ],
      [
        "Janaye",
        "Marjorie",
        "Shea"
      ],
      [
        "Biasioni",
        "Penhaligon",
        "Saldler"
      ],
      [
        "jbiasioni0@flavors.me",
        "mpenhaligon1@washingtonpost.com",
        "ssaldler2@google.com"
      ],
      [
        "2017/03/26",
        "2016/11/07",
        "2017/02/24"
      ],
      [
        "Wang Sai Phun",
        "Pul-e Sangī",
        "Doctor Juan León Mallorquín"
      ],
      [
        "Macaque, pig-tailed",
        "Hyena, striped",
        "Long-tailed skua"
      ]
    ])
});
