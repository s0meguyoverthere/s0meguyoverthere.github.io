
const reportdata = '{"age":52, "gender":"male", "History":"acute onset chest pain", "Findings":"no acute findings", "Impression": "no acute abnormality"}';

const Preportdata = JSON.parse(reportdata);

let file = 'jackets/1/report.json';

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  alert(myText);
  return myText;
};

let filetext = getText(file);


let onelinerstr = Preportdata.History; 
let findingsstr = Preportdata.Findings;
let impressionstr = Preportdata.Impression;

alert(onelinerstr);

function fillreport () {
  document.getElementById('onelinerp').innerHTML = onelinerstr;
  document.getElementById('findingsp').innerHTML = findingsstr;
  document.getElementById('impressionp').innerHTML = impressionstr;
}

let medialoc = 'jackets/1/cxr.jpg';
