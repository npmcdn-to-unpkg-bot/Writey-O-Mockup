// Setting height of interface section
$(document).ready(function(){
    var windowHeight = $(window).innerHeight();        //Get the height of the browser window
    var navHeight = $('#navBar').height();


    // Resizing full page content div
    $('#bodyContainer').height(windowHeight - navHeight);  //Resize the pageContent div, with a size of 60 - page height.

    // Vertically Centering Circle
    $('#circle').css("margin-top",(windowHeight - navHeight)/4 + "px");  //Resize the pageContent div, with a size of 60 - page height.

    var rightWidth = $('#rightBox').width();
    
    var storyboxWidth = $('#storyBox').width();
    // horizontally centering storybox within right div
    $('#storyBox').css("margin-left",(rightWidth - storyboxWidth)/2 + "px"); 

    // horizontally centering  marker container
    var leftWidth = $('#leftBox').width();
    var circleWidth = 500;
    var contMargin = (leftWidth - circleWidth)/2;
	$('#markerContainer').css("margin-left",contMargin + "px"); 
	$('#markerContainer').css("margin-top",-circleWidth/2 + "px"); 
	// console.log(circleWidth);


    // rotating circular marker
	var angle = 0;
	  setInterval(function(){
	    angle+=1;
	  $("#markerContainer").rotate(angle);
	 },50);
});

// Setting height of interface section
$(window).resize(function(){
    var windowHeight = $(window).innerHeight();        //Get the height of the browser window
    var navHeight = $('#navBar').height();


    // Resizing full page content div
    $('#bodyContainer').height(windowHeight - navHeight);  //Resize the pageContent div, with a size of 60 - page height.

    // Vertically Centering Circle
    $('#circle').css("margin-top",(windowHeight - navHeight)/4 + "px");  //Resize the pageContent div, with a size of 60 - page height.

    var rightWidth = $('#rightBox').width();
    
    var storyboxWidth = $('#storyBox').width();
    // horizontally centering storybox within right div
    $('#storyBox').css("margin-left",(rightWidth - storyboxWidth)/2 + "px"); 

    // horizontally centering  marker container
    var leftWidth = $('#leftBox').width();
    var circleWidth = 500;
    var contMargin = (leftWidth - circleWidth)/2;
	$('#markerContainer').css("margin-left",contMargin + "px"); 
	$('#markerContainer').css("margin-top",-circleWidth/2 + "px"); 
	// console.log(circleWidth);


 //    // rotating circular marker
	// var angle = 0;
	//   setInterval(function(){
	//     angle+=1;
	//   $("#markerContainer").rotate(angle);
	//  },50);
});



// setting height of nav bar
// $(document).ready(function(){

// });

