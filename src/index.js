(function($) {
  /* maneja la interaaciones con elementos visuales*/
  $.fn.cardify = function() {
    /* busca todas la imagenes en el contenedor*/
    let imagen = $(this).find('img');
    /* añadiendo estilos a las imágenes*/
    imagen.addClass('img');
    /* recorre cada una de las imágenes*/
    imagen.each(function() {
      /* a la etiqueta img lo contiene la etiqueta figure*/
      $(this).wrap('<figure></figure>');
      /* con this se seleciona las imagnes, etiqueta img */
      /* busca el elemento padre de la etiqueta img, es decir figure y le adiciona la etiqueta figcaption*/
      $(this).parent().append($('<figcaption class= "letter"></figcaption>'));
    });
    /* incluyendo el hover*/
    imagen.mouseover(function() {
      /* seleccionando el atributo alt de la etiqueta img*/
      let getAttrOver = $(this).attr('alt');
      /* seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
      let showTextFigcaption = $(this).next().text(getAttrOver);
      /* mostrando texto de figcaprion*/
      showTextFigcaption.css({'display': 'inline'});
      /* opacando imagen*/
      $(this).addClass('efect-img');
    });

    imagen.mouseout(function() {
      /* seleccionando el atributo alt de la etiqueta img*/
      let getAttrOut = $(this).attr('alt');
      /* seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
      let outTextFigcaption = $(this).next().text(getAttrOut);
      /* ocultando texto de figcaption*/
      outTextFigcaption.css({'display': 'none'});
      /* visualizando imagen*/
      $(this).removeClass('efect-img');
    });
  };
})(jQuery);
