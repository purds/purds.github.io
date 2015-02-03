// http://masonry.desandro.com/masonry.pkgd.js added as external resource
// https://rawgithub.com/desandro/classie/master/classie.js added

docReady( function() {

  var container = document.querySelector('.masonry');
  var msnry = new Masonry( container, {
    columnWidth: 60
  });

  eventie.bind( container, 'click', function( event ) {
    // don't proceed if item was not clicked on
    if ( !classie.has( event.target, 'item' ) ) {
      return;
    }
    // change size of item via class
    classie.toggle( event.target, 'gigante' );
    // trigger layout
    msnry.layout();
  });

});

