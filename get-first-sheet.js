module.exports = function getFirstSheet(workbook) {
  if (!workbook) {
    return null;
  }

  if (!workbook.Sheets || !workbook.SheetNames || !workbook.SheetNames.length) {
    return null;
  }

  const firstSheetName = workbook.SheetNames[0];
  return {
      name: firstSheetName,
      sheet: workbook.Sheets[firstSheetName]
  };
};
