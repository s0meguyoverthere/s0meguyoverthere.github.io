
let file = 'jackets/1/report.json';

let myJSONdata;

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  alert(myText);
  myJSONdata = JSON.parse(myText);
  alert(myJSONdata.History);
  return myJSONdata;
};

let filedata = getText(file);


let onelinerstr = myJSONdata.report[0].History; 
let findingsstr = myJSONdata.report[0].Findings;
let impressionstr = myJSONdata.report[0].Impression;

alert(onelinerstr);

function fillreport () {
  document.getElementById('onelinerp').innerHTML = onelinerstr;
  document.getElementById('findingsp').innerHTML = findingsstr;
  document.getElementById('impressionp').innerHTML = impressionstr;
}

let medialoc = 'jackets/1/cxr.jpg';
