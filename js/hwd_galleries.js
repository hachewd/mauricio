var gal= $('.galerias li a');
var attr;
$('body').append('<div id="hwd-slider"><div class="slider"></div> <botton class="left">&#60;</botton><botton class="right">&#62;</botton></div>');
/*console.log($('gal'))*/
gal.each(function(indice, element){
	attr =  $(this).attr('href');
	$('.slider').append('<figure class="img'+indice+'"><img src="'+attr+'"></figure>');
	/*$(element).click(function(){
		
		$('.slider').append('<figure><img src="'+attr+'"></figure>');
		$('#hwd-slider').css('visibility','visible');
		$('.slider figure').animate({
			opacity: 1,
		});
		$('.darkness').animate({
			opacity: 1,
		});
		return false;
	});*/

});
console.log($('.img2').width());