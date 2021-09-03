// Cine JS File

// Variables
  // Cine load & show vars
    var movielength = 233         	  // number of images/frames defined differently for each movie
    var lastimage = movielength - 1;  // the array location of the last image in the cine to start index at 0
    var foldername = "cine/";  // set the name of the folder where the images are stored
    var imagepath = foldername + 0 + '.jpg'  ; // iniitalze path to first image
    var currentimage = 0;			 // which image in the cine is to be displayed
    var cine = new Array ();
  // User control Vars
    var xpos = 0;					// x location of the mouse
    var ypos = 0;					// y location of the mouse
    var oldxpos = 0;				// previous x location of the mouse
    var oldypos = 0;				// previous y location of the mouse
    var threshold = 1;      // minimum change in x to scroll (lower is more sensetive)
    var scrollobject = 0 ;		// this contains the object of the cine to scroll through

// Listen
  //document.onmousemove = mouseMove;
  document.onmouseup = mouseUp;
  document.onkeydown = checkKeycode;
  document.onwheel = checkWheel

// functions
function focusover(x) {  x.style.border = "thin solid yellow";}
function focusout(x) {  x.style.border = "thin solid black";}


function loadmedia() {  // Build page on load
    // Build cine array
      for (let i = 0; i < movielength; i++) {
        var imagepath = foldername + i + '.jpg'  ;
        cine[i] = new Image();
        cine[i].src = imagepath;
      }
}

function advancecine()				        // scroll forward in the cine by 1 image
  {
  	if (currentimage == lastimage)
  	 {
  		currentimage = currentimage; //stop at edge of stack
  	 }
  	 else
  	 {
  	 	currentimage = currentimage + 1
  	 };
  	 document.cineframe.src = cine[currentimage].src;

  	 ;
  };


function backcine()					 // scroll backwards in the cine by 1 image
{
	if (currentimage == 0)
  	 {
  		currentimage = currentimage; //stop at edge of stack
  	 }
  	 else
  	 {
  	 	currentimage = currentimage - 1;
  	 };
  	 document.cineframe.src = cine[currentimage].src;
  };

  function checkKeycode(e) {
  var keycode;

  if (window.event) keycode = window.event.keyCode;

  else if (e) keycode = e.which;

  // alert("keycode: " + keycode);

  if(keycode == 40)  advancecine();
  if(keycode == 38)  backcine();

  }


  function mouseUp(ev)
    {
     scrollobject = 0;
     return
    };

  function checkWheel(ev)
  {
  	var wheelY = ev.deltaY;
  		if (wheelY > 0) {backcine();}
  		if (wheelY < 0) {advancecine();}

  }

  function preparetoscroll(ev)         // updates mouse position so that old values for
  				     // oldxpos, oldypos are not used when determining
   				     // if threshold values are met for updating the image

    {
  	scrollobject = 1;
  	if (!ev) var ev = window.event;
        getMousePosition(ev);		//  calls function to get xpos and ypos updated relative to document
  	oldxpos = xpos;
  	oldypos = ypos;
  	return true;
     };


  function getMousePosition(ev)
   {

     if (ev.pageX || ev.pageY)		// basically if Safari or Firefox which use absolute coordinates
  	{xpos = ev.pageX;
     	 ypos = ev.pageY;
  	}
       else
  	{xpos = ev.clientX + document.body.scrollLeft - document.body.clientLeft;
           ypos = ev.clientY + document.body.scrollTop - document.body.clientTop;
          }

  	  return true;
    };


  function mouseMove(ev)
   {

   	if (scrollobject == 1)
   	{
   	if (!ev) var ev = window.event;
        getMousePosition(ev);			//  calls function to get xpos and ypos updated relative to document

  	if (Math.abs( oldypos - ypos ) > threshold)
  	{

  	  if (oldypos < ypos) {advancecine(); }
  	  if (oldypos > ypos) {backcine(); }

  	  oldxpos = xpos;				//  set the old position before updating the new one
  	  oldypos = ypos; 			  	//  set the old position before updating the new one

    	};						// end if threshold is met

    	};						// end if (scrollobect)
   	return true;
   };
