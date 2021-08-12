
let onelinerstr = "54 yo male with abrupt onset crushing substernal chest pain";
let findingsstr = "Normal cardiomediostinal silhouette. Clear lungs. No evidence of pleural effusion or penumothorax.";
let impressionstr = "No acute cardipulmonary abnormality.";

function fillreport () {
  document.getElementById('onelinerp').innerHTML = onelinerstr;
  document.getElementById('findingsp').innerHTML = findingsstr;
  document.getElementById('impressionp').innerHTML = impressionstr;
}

let medialoc = 'jackets/1/cxr.jpg';
