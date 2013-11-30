(function($) {
  // Scroll to bottom and change icon when info is showed
  $('#eventcanister').on('shown.bs.collapse', function() {
    location.hash = '#eventcanister';
    location.href = location.href;
    $('#toggle-footer i').toggleClass('fa-angle-double-up fa-angle-double-down')
  });

  // Change icon when closed
  $('#eventcanister').on('hidden.bs.collapse', function() {
    $('#toggle-footer i').toggleClass('fa-angle-double-up fa-angle-double-down')
  });

  // Activate links
  $('[href="#eventcanister"]').on('click', function(event) {
    if ($('#eventcanister').is(':visible'))
      return;

    event.preventDefault();
    $('#eventcanister').collapse('show');
  });

  $('#toggle-footer').on('click', function(event) {
    event.preventDefault();
    $('#eventcanister').collapse('toggle');
  });

  /* Offcanvas not in use
  $('[data-toggle=offcanvas]').click(function() {
    $('.sidebar-offcanvas').toggleClass('active');
  });
  */

  $(function() {
    var toggle = location.hash != '#eventcanister';
      // Activate company info toggle hide if not in hash
    $('#eventcanister').collapse({
      toggle: toggle
    });

    // Twitter widget causes bottom to scroll out
    // Should check this with twtr.ready, but let's use timeout for now
    if (!toggle) {
      setTimeout(function() {
        location.href = location.href;
      }, 500);
    }
  });

})(jQuery);