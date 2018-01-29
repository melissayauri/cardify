/* se ejecuta la función cardify*/
/*elaborando el plugin-libreria*/
/*función con clausura*/
(function($) {
  /*maneja la interaaciones con elementos visuales*/
    $.fn.cardify = function() {
      /*busca todas la imagenes en el contenedor*/
      $(this).find('img').each(function() {
        /*a la etiqueta img lo contiene la etiqueta figure*/
        var figure = $(this).wrap('<figure></figure>');
        /* con this se seleciona las imagnes, etiqueta img */
        console.log($(this));
        /*busca el elemento padre de la etiqueta img, es decir figure y le adiciona la etiqueta figcaption*/
        $(this).parent().append($('<figcaption></figcaption>'));
        /*incorporando el atributo alt a la etiqueta figcaption*/
        /*seleccionando el atributo alt de la etiqueta img*/
        var textImagen = $(this).attr('alt')
        /*seleccionando el elemento que le precede a la etiqueta img,que es figcaption*/
        $(this).next().text(textImagen);
      });
    }
  })(jQuery);
