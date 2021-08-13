
const reportdata = '{"age":52, "gender":"male", "History":"acute onset chest pain", "Findings":"no acute findings", "Impression": "no acute abnormality"}';

const Preportdata = JSON.parse(reportdata);

let file = 'jackets/1/report.json';

let myJSONdata;

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  alert(myText);
  let myJSONdata = JSON.parse(myText);
  return myJSONdata;
};

let filedata = getText(file);


let onelinerstr = myJSONdata.History; 
let findingsstr = myJSONdata.Findings;
let impressionstr = myJSONdata.Impression;

alert(onelinerstr);

function fillreport () {
  document.getElementById('onelinerp').innerHTML = onelinerstr;
  document.getElementById('findingsp').innerHTML = findingsstr;
  document.getElementById('impressionp').innerHTML = impressionstr;
}

let medialoc = 'jackets/1/cxr.jpg';
