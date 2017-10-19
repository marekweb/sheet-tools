const xlsx = require('xlsx');

module.exports = function extractSheetHeaders(sheet) {
  const ref = sheet['!ref'];
  if (!ref) {
    return [];
  }
  const range = xlsx.utils.decode_range(ref);

  const headers = [];
  for (let c = range.s.c; c <= range.e.c; c++) {
    const cellAddress = xlsx.utils.encode_cell({ r: 0, c });
    const cell = sheet[cellAddress];
    const value = cell.v;
    headers.push(value);
  }
  return headers;
};
