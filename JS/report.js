
const reportdata = '{"age":52, "gender":"male", "History":"acute onset chest pain", "Findings":"no acute findings", "Impression": "no acute abnormality"}';

const Preportdata = JSON.parse(reportdata);

let onelinerstr = Preportdata[2]; 
let findingsstr = Preportdata[3];
let impressionstr = Preportdata[4];

function fillreport () {
  document.getElementById('onelinerp').innerHTML = onelinerstr;
  document.getElementById('findingsp').innerHTML = findingsstr;
  document.getElementById('impressionp').innerHTML = impressionstr;
}

let medialoc = 'jackets/1/cxr.jpg';
