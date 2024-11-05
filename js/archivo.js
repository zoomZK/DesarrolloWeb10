
     var header = $('#cabecera');
     var h1 = $('#tittle');
     var intro = $('#intro');
     var nudo = $('#nudo');
     var fin = $('#fin');


    // header: agregarle un elemento div con la clase .overlay como último elemento hijo
    // -- append()
    header.append('<div class="overlay"></div>');

    // a la etiqueta h1 agregarle el atributo class cuyo valor sea .titular
    // -- addClass()
    h1.addClass('titular');
    
    //intro: antes del párrafo, agregar un elemento con la clase .line
    // -- before()
    $('#intro p').before('<div class="line"></div>');

    // nudo: agrega, luego del contenido, un objeto con la clase .overlay
    nudo.prepend('<div class= "overlay"></div>');

    // fin: agrega luego de él un objeto con la clase .divisor guardado en la siguiente variable
    // -- after()
    fin.after('<div class= "divisor"></div>')

    // a este último elemento (.divisor) agregale un párrafo con tu nombre y apellido
    // -- html()
    $('#divisor').html('<p>Francisco Quinteros</p>')