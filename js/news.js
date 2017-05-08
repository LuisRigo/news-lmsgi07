$(document).ready(function(){

	var scroll_bool = false;
	/*
	 * Comprueba si la ventana modifica su tamaño.
	 * En el caso correcto si el tamñano es menor a 768 píxels se comprueba si esta en el top 
	 * para activar el banner en dispositivos móviles. En caso contrario se deja el banner activo.
	*/
	window.onresize = function() {
    	$(window).scroll(function(){
    		if ($(window).width() < 768) {
    			if ($(window).scrollTop() == 0){
					$(".advert-container").show();
				} else  {
					$(".advert-container").hide();
				}
    		} else {
    			$(".advert-container").show();
    		}			
		});	
	}

	$("#scrolling").click(function(){
		if (scroll_bool == false) {
			scroll_bool = true;
			$(this).html("<span class=\"glyphicon glyphicon-stop\"></span> Desactivar Scrolling");
			alert("Ha activado el scrolling");
		} else {
			scroll_bool = false;
			$(this).html("<span class=\"glyphicon glyphicon-play\"></span> Activar Scrolling");
			alert("Ha desactivado el scrolling");
		}
	    
	});

});