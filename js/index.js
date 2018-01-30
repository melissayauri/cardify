(function($) {
  /*maneja la interaaciones con elementos visuales*/
    $.fn.cardify = function() {
      /*busca todas la imagenes en el contenedor*/
      let imagen = $(this).find('img');
      imagen.each(function() {
        /*a la etiqueta img lo contiene la etiqueta figure*/
        let figure = $(this).wrap('<figure></figure>');
        /* con this se seleciona las imagnes, etiqueta img */
        console.log($(this));
        /*busca el elemento padre de la etiqueta img, es decir figure y le adiciona la etiqueta figcaption*/
        $(this).parent().append($('<figcaption></figcaption>'));
        /* incluyendo el hover*/
      });
      
      imagen.on('mouseover', function() {
        /*seleccionando el atributo alt de la etiqueta img*/
        let textImagen = $(this).attr('alt')
        /*seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
        let text = $(this).next().text(textImagen);
        $(this).css({'opacity': '0.1',});
        text.css({'display': 'inline'});
      });

      imagen.on('mouseout', function(text) {
             /*seleccionando el atributo alt de la etiqueta img*/
        let textImagen2 = $(this).attr('alt')
        /*seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
        let text2 = $(this).next().text(textImagen2);
        $(this).css({'opacity': '1',});
        text2.css({'display': 'none'});
      });
    }
  })(jQuery);


 