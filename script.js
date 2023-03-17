$(window).scroll(function(){
 
   $('.navbar').fadeToggle('pic'.$(this).scrollTop()>100);
});