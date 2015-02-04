$('#container').masonry()
  .append( elem )
  .masonry( 'appended', elem );
   columnWidth: 10,
  "gutter": 10,
  itemSelector: '.frameboy'
  // no method is same as layout -> .masonry('layout')
  .masonry();
  
$container.masonry('bindResize')
feed.run();