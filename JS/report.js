
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


let file = 'jackets/1/report.json';

async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)
  let json = await response.json(); // (3)
  return json;
}

let myJSONdata = loadJson(file);

function callApi(file) {
  return fetch(file)
    .then(response => {
      if (response.ok) {
        return response.json().then(response => ({ response }));
      }

      return response.json().then(error => ({ error }));
    })
  ;
}


const { response, error } = callApi(url);
if (response) {
  // handle json decoded response
} else {
  // handle json decoded 500 series response
}

// //let myJSONdata = getJSONdata(file);

// async function fetchMoviesJSON() {
//   const response = await fetch(file);
//   const movies = await response.json();  
//   return movies;
// }

// fetchMoviesJSON().then(movies => {
//   myJSONdata; // fetched movies
// });

// function status(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return Promise.resolve(response)
//   } else {
//     return Promise.reject(new Error(response.statusText))
//   }
// }

// function json(response) {
//   return response.json()
// }

// function getJSONdata(_JSONloc) {
//   let _JSONout;
//   fetch(_JSONloc)
//   .then(status)
//   .then(json)
//   .then(function(data) {
//     console.log('Request succeeded with JSON response', data);
//     _JSONout = data;
//   }).catch(function(error) {
//     console.log('Request failed', error);
//   });
//   console.log(_JSONout);
//   return _JSONout;
// }


// let onelinerstr = myJSONdata.report[0].History; 
// let findingsstr = myJSONdata.report[0].Findings;
// let impressionstr = myJSONdata.report[0].Impression;

//alert(onelinerstr);

function fillreport () {
  //document.getElementById('onelinerp').innerHTML = onelinerstr;
  //document.getElementById('findingsp').innerHTML = findingsstr;
  //document.getElementById('impressionp').innerHTML = impressionstr;
};

//function createreport(){


  //for (let i=0;i<=Object.keys(myJSONdata.report[0]).length;i++)
  
  // Object.keys(myJSONdata.report[0])[i]
  

//}
