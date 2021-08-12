$(document).ready(function(){

  $("#history").click(function(){
    $("#history1").toggle();
    $("#history2").toggle();
  });

  $("#oneliner").click(function(){
    $("#oneliner1").toggle();
    $("#oneliner2").toggle();
  });

  $("#findings").click(function(){
    $("#findings1").toggle();
    $("#findings2").toggle();
  });

  $("#impression").click(function(){
    $("#impression1").toggle();
    $("#impression2").toggle();
  });
});

let text = '{ "report" : [' +
'{"history": "chest painnnnnnnn",' +
'"oneliner": "55 yo male with sudden onset crushing chest pain",' +
'"findings": "normal findings section",' +
'"impression": "no acute cardiopulmonary abnormality" } ]}';

const reportdata = JSON.parse(text);
document.getElementById("history2").innerHTML = reportdata.report[0].history;
