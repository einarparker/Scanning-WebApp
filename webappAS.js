var today = Utilities.formatDate(new Date(), "GMT", "EEEE,  dd MMMM yyyy");

function doGet (e) {
  var tmp = HtmlService.createTemplateFromFile("webapp");
    
    var day = today
    tmp.day = "Today is "+day;

  return tmp.evaluate();
}
 function userClicked(scan){
   var id = "1TEeuWpLvJv5FZcFnjbQefFVqsDsHCsGwhYEitP1rQpA";
   var ss = SpreadsheetApp.openById(id)
   var ws = ss.getSheetByName("new");
    var sda = ([null,null,null,null,null,scan,null,null,null,"arrived",today]);
  
  //ws.setValues(sda)[0]
   
  //range.setValues([scan,new Date,"arrived"]);

   ws.appendRow(sda)
  
};

 function include(filename){
   return HtmlService.createHtmlOutputFromFile(filename).getContent();
 }