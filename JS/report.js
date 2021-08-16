
let file = 'jackets/1/report.json';
let medialoc = 'jackets/1/cxr.jpg';




// Load JSON Data
async function getText(_JSONloc) {
  let JSONobj = await fetch(_JSONloc);
  let JSONtxt = await JSONobj.text();
  let JSONdata = JSON.parse(JSONtxt);
  return JSONdata.resolve();
};

let myJSONdata = getText(file);


let onelinerstr = myJSONdata.report[0].History; 
let findingsstr = myJSONdata.report[0].Findings;
let impressionstr = myJSONdata.report[0].Impression;

alert(onelinerstr);

function fillreport () {
  document.getElementById('onelinerp').innerHTML = onelinerstr;
  document.getElementById('findingsp').innerHTML = findingsstr;
  document.getElementById('impressionp').innerHTML = impressionstr;
};

//function createreport(){


  //for (let i=0;i<=Object.keys(myJSONdata.report[0]).length;i++)
  
  // Object.keys(myJSONdata.report[0])[i]
  

//}
