const xlsx = require('xlsx');

module.exports = function(sheet, maximumCount = 3) {
  const ref = sheet['!ref'];
  if (!ref) {
    return [];
  }
  const refRange = xlsx.utils.decode_range(ref);

  // Perform the search over each column in the range.
  const previewColumns = [];
  for (let c = refRange.s.c; c <= refRange.e.c; c++) {
    // Begin search down the column
    previewColumns[c] = [];
    let r = 0;
    while (r < refRange.e.r && previewColumns[c].length < 3) {
      r++; // By starting with this, we skip the headers
      const cellAddress = xlsx.utils.encode_cell({ r, c });
      const cell = sheet[cellAddress];
      if (!cell) {
        continue;
      }
      if (cell.v === undefined) continue;
      previewColumns[c].push(cell.v);
    }
  }
  return previewColumns;
};
