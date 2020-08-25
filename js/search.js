    (function($) {
    "use strict"; // Start of use strict
  
    $("#search").on("input", function(e) {
      const value = $(this).val();
      if (value.length == 0)
      {
        $(this).removeClass("is-valid").removeClass("is-invalid");
      }
      else if ($.validateAddress(value) || $.validateBlockHash(value))
      {
        $(this).removeClass("is-invalid").addClass("is-valid");
      }
      else
      {
        $(this).removeClass("is-valid").addClass("is-invalid");
      }
    });
  })(jQuery); // End of use strict
  