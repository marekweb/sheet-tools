Tools for spreadsheets. Work in progress.

This module works with the [`xlsx` module](https://www.npmjs.com/package/xlsx).


```js
const xlsx = require('xlsx');
const sheetTools = require('sheet-tools');

const workbook = xlsx.read(spreadsheetFile);

const headers = sheetTools.extractWorkbookHeaders(workbook)
```

Output:

```js
[
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
  }
]
```

