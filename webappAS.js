var today = Utilities.formatDate(new Date(), "GMT", "EEEE,  dd MMMM yyyy");
var dayToday = Utilities.formatDate(new Date(), "GMT", "dd MMM yyyy");

function doGet(e) {
  var tmp = HtmlService.createTemplateFromFile("webapp");

  var day = today;
  tmp.day = "Today is " + day;

  return tmp.evaluate();
}
function userClicked(scanDpd) {
  var id = "1TEeuWpLvJv5FZcFnjbQefFVqsDsHCsGwhYEitP1rQpA";
  var ss = SpreadsheetApp.openById(id);
  var ws = ss.getSheetByName("new");
  var dpd = [
    null,
    null,
    null,
    null,
    null,
    scanDpd,
    null,
    null,
    null,
    "arrived",
    today,
  ];
  ws.appendRow(dpd);
}
function eanScanned(scanEan) {
  var id = "1UJOHgQmJhobZzjtPnA8GEq4FsKuhksGE_Vg_cPgYsQE";
  var ss = SpreadsheetApp.openById(id);
  var ws = ss.getSheetByName("new stuff");
  var ean = [dayToday, null, null, null, null, null, null, null, null, scanEan];
  ws.appendRow(ean);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
