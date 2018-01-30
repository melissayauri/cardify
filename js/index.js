(function($) {
  /*maneja la interaaciones con elementos visuales*/
    $.fn.cardify = function() {
      /*busca todas la imagenes en el contenedor*/
      let imagen = $(this).find('img');

      imagen.each(function() {
         /*a la etiqueta img lo contiene la etiqueta figure*/
        $(this).wrap('<figure></figure>');
          /*busca el elemento padre de la etiqueta img, es decir figure y le adiciona la etiqueta figcaption*/
        $(this).parent().append($('<figcaption></figcaption>'));

      });

      imagen.mouseover(function() {
         /*seleccionando el atributo alt de la etiqueta img*/
        let getAttrOver = $(this).attr('alt');
        /*seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
        let showText = $(this).next().text(getAttrOver);
        /*mostrando texto de figcaprion*/
        showText.css({'display': 'inline'});
        /*opacando imagen*/
        $(this).css({'opacity': '0.1',});

      });
      
      imagen.mouseout(function() {
         /*seleccionando el atributo alt de la etiqueta img*/
        let getAttrOut = $(this).attr('alt')
        /*seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
        let outText = $(this).next().text(getAttrOut);
        /*ocultando texto de figcaprion*/
        outText.css({'display': 'none'});
       /*visualizando imagen*/
        $(this).css({'opacity': '1',});

      });
    }
  })(jQuery);