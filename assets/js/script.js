$(document).ready(function(){
	/*$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   function currentSection (){
	   		var current;
	   		$('body').children().each(function(){
				if($(this).hasClass('active')){
					current = $(this).attr('id');
				}
			});
	   		return current;
	   	}
	   	function nextSection(currentSection){
	   		var current = $('#'+currentSection).removeClass('active');
	   		var nextSection = $('#'+currentSection).next();
	   		nextSection.addClass('active');
	   		var nextId = nextSection.attr('id');
	   		$('html, body').animate({
		        scrollTop: $("#"+nextId).offset().top
		    }, 1000);
	   	}
	   if (st > lastScrollTop){
	   		var current = currentSection();
	   		nextSection(current);
		    console.log(current);

	   } else {
	      console.log('up');
	   }
	   lastScrollTop = st;
	});*/
	function explode(){
		console.log('kabimo');
	  $('.loader').css('opacity', '0');
	}
	setTimeout(explode, 100);
	

	$("#mas-detalles").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#promos").offset().top
	    }, 2000);
	});
	var nav = $('header nav');
	function fixedNav(){
		nav.addClass('fixed-nav');
		nav.children(".hide").removeClass('hide');
		nav.children(".white").addClass('hide');
		nav.children("i.hamburguer").css('color', 'red');
		nav.children("i.hamburguer").css('top', '28%');
		nav.children('ul').children("a").each(function(){
			$(this).addClass('fixed-nav'); 
		})
	}
	function regularNav(){
		nav.removeClass('fixed-nav');
		nav.children(".hide").removeClass('hide');
		nav.children(".red").addClass('hide');
		nav.children("i.hamburguer").css('color', 'white');
		nav.children("i.hamburguer").css('top', '3%');
		nav.children('ul').children("a").each(function(){
			$(this).removeClass('fixed-nav'); 
		})
	}
	$(window).scroll(function(event){
		var scroll = $(this).scrollTop();
		if(scroll > 600){
			fixedNav();
		} else {
			if(nav.hasClass('fixed-nav')){
				regularNav();
			}
		}
	});
	function openMenu ( event ) {
	  var target = $( event.target );
	  if ( target.is( "i.hamburguer" ) ) {
	  	console.log('click');
	  	target.parent().next().removeClass('is-closed');
	    target.parent().next().addClass('is-open');
	  } else {

	  }
	}
	function closeMenu ( event ) {
	  var target = $( event.target );
	  if ( target.is( "i.close-sidenav" ) ) {
	  	target.parent().removeClass('is-open');
	    target.parent().addClass('is-closed');
	  } else {

	  }
	}
	nav.click(openMenu);
	$('div.sidenav').click(closeMenu);

	var galeria = $('.casa .foto .seleccion');
	function showImage(event){
		var galeria = $('.casa .foto');
		var ventana = $('.casa .foto .ventana');
		var ul = $('.casa .foto .seleccion');
		var target = $( event.target );
		var modelo = target.parent().parent().parent().attr('id');
		var ventana = target.parent().parent().prev();
		var foto = target.parent().attr('id');
		ventana.css('background-image', 'url(../assets/img/casas/'+modelo+'/'+foto+'.jpg)');
		
	}
	var modeloCasa = $('.casa .foto').attr('id');
	if(modeloCasa){
		var ventana = $('.casa .foto .ventana');
		ventana.css('background-image', 'url(../assets/img/casas/'+modeloCasa+'/casa.jpg)');
	}
	
	
	galeria.click(showImage);
});