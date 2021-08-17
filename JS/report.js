
let file = 'jackets/1/report.json';
let medialoc = 'jackets/1/cxr.jpg';




// // Load JSON Data
// function getJSONdata(_JSONloc, _JSONout) {
//   let myJSONpromise = getJSONpromise(_JSONloc).then( response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//       return response.blob();
//     } 
//   });
// }

// async function getJSONpromise(_JSONloc) {
//   let JSONobj = await fetch(_JSONloc);
//   let JSONtxt = await JSONobj.text();
//   let JSONdataP = JSON.parse(JSONtxt);
//   return JSONdataP;
// };

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

//function getJSONdata(_JSONloc, _JSONout) {
let myJSONdata;
fetch(file)
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data);
    myJSONdata = data;
  }).catch(function(error) {
    console.log('Request failed', error);
  });
//}


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
