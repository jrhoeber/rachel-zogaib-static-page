$( document ).ready(function() {
  $(".boxInner").click(function (e) {
    $('.image-preview').attr('src', $(e.currentTarget).find(".image").attr('src'));
    $('.header-text').text($(e.currentTarget).find(".titleBox").text());
    $('#myModal').modal('show'); 
  });
});



$(function(){
  // See if this is a touch device
  if ('ontouchstart' in window)
  {
    // Set the correct body class
    $('body').removeClass('no-touch').addClass('touch');
    
    // Add the touch toggle to show text
    $('div.boxInner img').click(function(){
      $(this).closest('.boxInner').toggleClass('touchFocus');
    });
  }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});
