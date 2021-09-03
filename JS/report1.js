// create HTML elements from JS and JSON data

const JSONdata = {
    "ID"            :       "00001",
    "age"           :       57,
    "gender"        :       "female",
    "format"        :       "study", 
    "title"         :       "Normal CXR",  
    "report"        :       {
                            "History"       :       "sudden onset chest pain",
                            "Findings"      :       "No acute findings",
                            "Impression"    :       "No acute abnormality"
                            },
    "media"        :        [{
                                "filename"      :   "pa.jpg",
                                "modality"      :   "XR",
                                "cine"          :   false,
                                "title"         :   "Title 1",
                                "caption"       :   "Caption 1"
                            },
                            {
                                "filename"      :   "lat.jpg",
                                "modality"      :   "XR",
                                "cine"          :   false,
                                "title"         :   "Title 2",
                                "caption"       :   "Caption 2"
                            }]
    };

// Function to pull data from JSON file and display media from DB based on ID#
function fillpage (JSONdat) {

    JSONreport(JSONdat);
    // JSONgallery(JSONdat);
    JSONcine(JSONdat);

} // End of fillpage


// Function to create new Sections within an Article
// ('formatted input object','Destination Node within DOM')
function JSONreport (JSONdat) {

    // define new css element name
    const newelementID = 'JSreport';

    // Get Destination Node
        const destinationparentID = '#'+'report'; //Append # to get css element
        let parent = document.querySelector(destinationparentID);
    // Clear Node to prepare for new data
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };


    // Create H1 node & Append Text to New Node
    let H1node = document.createElement('h1'); // Define new header
    H1node.appendChild(document.createTextNode(JSONdat.title)); //Append text node
    parent.appendChild(H1node); //Append to Parent


    // Create Section Node    
    let Secnode = document.createElement('section'); // Define Section Element
    Secnode.setAttribute("id",newelementID); // Give Node a name from Object

    for (let i=0; i < Object.keys(JSONdat.report).length; i++) {

        // Create H2 node & Append Text to New Node
        let H2node = document.createElement('h2'); // Define new header
        H2node.appendChild(document.createTextNode(Object.keys(JSONdat.report)[i])); //Append text node
        Secnode.appendChild(H2node); //Append to new Node

        // Create p Node & Append Text
        let pnode = document.createElement('p'); //Define new p 
        pnode.appendChild(document.createTextNode(Object.values(JSONdat.report)[i])); //Append text node
        Secnode.appendChild(pnode); //Append to new Node
    };

    // Append New Node to Destination Node
    parent.appendChild(Secnode);

}; // End of JSONreport function


// Function to display Images from case
function JSONgallery () {

        // Get Destination Node
        const destinationparentID = '#'+'ppdisplaywindow'; //Append # to get css element
        let parent = document.querySelector(destinationparentID);
    // Clear Node to prepare for new data
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };

        //Create Node to display image
        const imgnode = document.createElement('img'); // define new image
        imgnode.setAttribute("src", "DB/00001/pa.jpg");
        imgnode.setAttribute("id", "img1");
        imgnode.setAttribute("height", "100%");
        imgnode.setAttribute("width", "100%");
        imgnode.style.transform = "translate(-50%.-50%)";
        imgnode.style.position = "absolute";
        imgnode.style.objectFit = "contain";
        imgnode.style.visibility = "hidden";

        //Create Node to display image
        const imgnode1 = document.createElement('img'); // define new image
        imgnode1.setAttribute("src", "DB/00001/lat.jpg");
        imgnode1.setAttribute("id", "img2");
        imgnode1.setAttribute("height", "100%");
        imgnode1.setAttribute("width", "100%");
        imgnode1.style.transform = "translate(-50%.-50%)";
        imgnode1.style.position = "absolute";
        imgnode1.style.objectFit = "contain";
        imgnode1.style.visibility = "visible";


    // Append New Node to Destination Node    
        parent.appendChild(imgnode);
        parent.appendChild(imgnode1);

} //End of JSONgallery function

// Function to display cine case
function JSONcine () {

        // Get Destination Node
        const destinationparentID = '#'+'ppdisplaywindow'; //Append # to get css element
        let parent = document.querySelector(destinationparentID);
    // Clear Node to prepare for new data
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };

        for (let i=0; i < 232; i++) {

        //Create Node to display image
        const imgnode = document.createElement('img'); // define new image
        imgnode.setAttribute("src", "DB/00001/cine/" + i + ".jpg");
        imgnode.setAttribute("id", "img" + i);
        imgnode.setAttribute("height", "100%");
        imgnode.setAttribute("width", "100%");
        imgnode.setAttribute("draggable", "false");
        imgnode.style.transform = "translate(-50%.-50%)";
        imgnode.style.position = "absolute";
        imgnode.style.objectFit = "contain";
        imgnode.style.visibility = "hidden";

        // Append New Node to Destination Node    
        parent.appendChild(imgnode);

        }
        // show first image
        document.getElementById("img0").style.visibility = "visible";
        //alert("loaded"); // let me know when it's done loading
        document.getElementById("loading").style.display = "none";

} //End of JSONcine function


// Listen to document
    document.onkeydown = checkkey;

// Listener functions
function focusover(x) {
      x.style.border = "thin solid yellow";
    }

function focusout(x) {  
        x.style.border = "thin solid black";   
        scrollstate = false;
    }

// Pointer Control
let j = 0;                  // image index to display
let jmax = 231;             // max image indec for cine
let jy = 0;					// y location of the pointer
let ijy = 0;				// previous y location of the pointer
let ijc = 0;                // image index on click
let jh = 0;                 // height of target element
let djy = 0;                // displacement from clicked position
let j2hide = 0;             // j index to hide on update
let scrollstate = false;

function pointerdownevent (ev){
        ijy = jy;   // pointer y location on click
        ijc = j;    // image index on click 

    // Get height of target img over which pointer was clicked
        jh = document.querySelector('#' + ev.target.attributes[1].nodeValue).offsetHeight;

    scrollstate = true;

}

function pointerupevent (ev) {

    scrollstate = false;
    //alert("You let go");

}


// Track Mouse Movement When Over Element for Cine
function trackmousemovement (ev) {
    // Get new mouse position
        jy = ev.offsetY

    // Get displacement
        djy =  Math.floor(jmax*((ijy-jy)/jh));
    // Get new image to display
        j2hide = j;
        j=ijc+djy;
        if (j>jmax) {j=jmax};
        if (j<0) {j=0};

        if (scrollstate) {
        
            //if (!(j2hide == j)) {
                document.getElementById("img"+j2hide).style.visibility = "hidden"; // hide current image
                document.getElementById("img"+ (j)).style.visibility = "visible"; // show next image (reduce display artifact)
            //}

            document.getElementById("sometexthere").innerHTML = 'j2hide  = ' + j2hide + ' j = ' + j +' and djy = ' + djy + 'with jy = ' + jy + 'from ijy = ' + ijy + " from a object height jh = " + jh;

        };
}


function checkkey(x){
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (x) keycode = x.which;
  if(keycode == 40)  forcine(); // 40 key = down arrow
  if(keycode == 38)  revcine(); // 38 key = up arrow
}

function checkwheel (event) {
        var wheelY = event.deltaY;
            if (wheelY > 0) {
                revcine();
            }
            if (wheelY < 0) {
                forcine();
            }
  
}

function forcine(){ // advance forward in cine
    // accepts index for image to show, returns new show index
    // increase image index to show
    if (j < jmax) {
        document.getElementById("img"+ (j+1)).style.visibility = "visible"; // show next image (reduce display artifact)
        document.getElementById("img"+j).style.visibility = "hidden"; // hide current image
        j++; // increase index for shown image
    }
}

function revcine(){ // go back in cine
    // accepts index for image to show, returns new show index
    // increase image index to show
    if (j > 0) {
        document.getElementById("img"+ (j-1)).style.visibility = "visible"; // show next image (reduce display artifact)
        document.getElementById("img"+j).style.visibility = "hidden"; // hide current image
        j--; // increase index for shown image
    }
}