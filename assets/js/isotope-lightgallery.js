$(document).ready(function() {
  var $gallery = $('#gallery');
  $gallery.lightGallery();
  $gallery.imagesLoaded(function() {
    var iso = $gallery.isotope({
      // options
      sortBy: 'original-order',
      layoutMode: 'fitRows',
      itemSelector: '.revGallery-anchor',
      stagger: 30,
      masonry: {
        columnWidth: 200
      }
    });
  });
  $('.preloader').fadeOut('fast', function() {
    $gallery.addClass('ready');
  })
});

$('button').on('click', function() {
var filterValue = $(this).attr('data-filter');
$('#gallery').isotope({
  filter: filterValue
});
$gallery.data('lightGallery').destroy(true);
$gallery.lightGallery({
  selector: filterValue.replace('*', '')
});
});

//button active mode
$('.button').click(function() {
  $('.button').removeClass('is-checked');
  $(this).addClass('is-checked');
});

//CSS Gram Filters on Mouse enter
$("#gallery a .nak-gallery-poster").addClass("inkwell");

$("#gallery a").on({
  mouseenter: function() {
    $(this).find(".nak-gallery-poster").removeClass("mayfair").removeClass("inkwell").addClass("xpro2");
  },
  mouseleave: function() {
    $(this).find(".nak-gallery-poster").removeClass("xpro2").addClass("mayfair");
  }
});
