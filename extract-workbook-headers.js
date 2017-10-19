const xlsx = require('xlsx');
const extractSheetHeaders = require('./extract-sheet-headers');

module.exports = function extractWorkbookHeader(workbook) {
  return workbook.SheetNames.map(name => {
    const sheet = workbook.Sheets[name];
    const headers = extractSheetHeaders(sheet);
    return {
      name,
      headers
    };
  });
};
