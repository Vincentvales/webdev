$(document).ready(function () {
 
    
    
    
    //create an variable that store the value of how much document has been scrolled
    
    //create an variable that store our animated element's offset
    //var h1_offset_top = $('#tagline h1').offset().top;
            
    //    console.log(how_much_document_scrolled + "<," + h1_offset_top);

    //if(h1_offset_top - how_much_document_scrolled < window.innerHeight){
        //$('#tagline h1').addClass('animated fadeInDown');
});

$(window).scroll(function(){
console.log(" js is loaded");  
var how_much_document_scrolled = $(document).scrollTop();           
 //console.log(how_much_document_scrolled);              
 var h6_offset_top = $('#tagline h6').offset().top;
  console.log(h6_offset_top); 
    
if(h6_offset_top - how_much_document_scrolled < window.innerHeight-100) {
 console.log ('element showed up');   
 $('#tagline h6').addClass('animated lightSpeedIn');  
}    

});