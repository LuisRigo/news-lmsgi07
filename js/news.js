$(document).ready(function(){

	var scroll_bool = false;
	var i = 0;
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

	$("#more-news").click(function(){
		if (i == 0){
			cargarJSON(i+1);
			i++;
		} else if (i == 1){
			cargarJSON(i+1);
			i++;
		} else {
			//Do Nothing;
		}
	});

	if (($(window).scroll) && (scroll_bool)){

	};

	function cargarJSON(i){
		fichero = "data/" + i + ".json";
		$.getJSON( fichero, function( jsonObject ) {
	        ponerComunidades( jsonObject );
	    });
	}

	function ponerComunidades(json){
     $.each( json, function( j, item ) {
     	console.log(item.id);
         //dos formas de hacer lo mismo, la segunda es más adecuada.
         //$("#comunidades").append( "<option value='" + comunidad.slug + "'>" + comunidad.comunidad + "</option>" );
         //$('.main-container').append($('<option>', { value: comunidad.slug, text : comunidad.comunidad }));
         //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
     }); 
}

});