$(document).ready(function(){
    var windowHeight = $(window).innerHeight();        //Get the height of the browser window
    var navHeight = $('#navBar').height();
    $('#bodyContainer').height(windowHeight - navHeight);  //Resize the pageContent div, with a size of 60 - page height.
});