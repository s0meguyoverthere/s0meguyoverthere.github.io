
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


let file = 'jackets/1/report.json';
let myJSONdata = getJSONdata(file);

function getJSONdata(_JSONloc) {
  var _JSONout;
  fetch(_JSONloc)
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data);
    _JSONout = data;
  }).catch(function(error) {
    console.log('Request failed', error);
  });
  console.log('New Variable Name');
  return _JSONout;
}


// let onelinerstr = myJSONdata.report[0].History; 
// let findingsstr = myJSONdata.report[0].Findings;
// let impressionstr = myJSONdata.report[0].Impression;

alert(onelinerstr);

function fillreport () {
  //document.getElementById('onelinerp').innerHTML = onelinerstr;
  //document.getElementById('findingsp').innerHTML = findingsstr;
  //document.getElementById('impressionp').innerHTML = impressionstr;
};

//function createreport(){


  //for (let i=0;i<=Object.keys(myJSONdata.report[0]).length;i++)
  
  // Object.keys(myJSONdata.report[0])[i]
  

//}
