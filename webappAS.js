var today = Utilities.formatDate(new Date(), "GMT", "EEEE,  dd MMMM yyyy");           //sets and formats the date for DPD
var dayToday = Utilities.formatDate(new Date(), "GMT", "dd MMM yyyy");                //different date formatting needed for EAN

function doGet (e) {                                                                  //sets webapp in motion
  var tmp = HtmlService.createTemplateFromFile("webapp");
    tmp.today = "Today is "+today;                                                    //defines day that is going to be displayed on top of the page
    return tmp.evaluate();                                                            //line13 webapp.html
}
 function dpdScanned(scanDpd){                                                        //function triggered by after cleaning string
   var id = "1TEeuWpLvJv5FZcFnjbQefFVqsDsHCsGwhYEitP1rQpA";                           //spreadsheet id
   var ss = SpreadsheetApp.openById(id)                                               // spreadsheet into variable
   var ws = ss.getSheetByName("new");                                                 // find sheet within the spreadsheet
    var dpd = ([null,null,null,null,null,scanDpd,null,null,null,"arrived",today]);    // formatting what should be paste in to append
   ws.appendRow(dpd)                                                                  //"null" needed to skip empty columns 
  
};
 function eanScanned(scanEan){
   var id = "1UJOHgQmJhobZzjtPnA8GEq4FsKuhksGE_Vg_cPgYsQE";
   var ss = SpreadsheetApp.openById(id)
   var ws = ss.getSheetByName("new stuff");
    var ean = ([dayToday,null,null,null,null,null,null,null,null,scanEan]);
   ws.appendRow(ean)
  
};


 function include(filename){
   return HtmlService.createHtmlOutputFromFile(filename).getContent();
 }