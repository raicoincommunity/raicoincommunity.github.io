    (function($) {
    "use strict"; // Start of use strict
  
    $.validateAddress = function(address) {
      const addressRegex = new RegExp(
        `^rai_[13456789abcdefghijkmnopqrstuwxyz]{60}$`
      );
      return addressRegex.test(address);
    };

    $.validateBlockHash = function(hash) {
      return /^[A-F0-9]{64}$/.test(hash);
    };

    $.getUrlParameter = function(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
    };

    $.formatBalance = function(data){ 
      return data.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
    };
  })(jQuery); // End of use strict
  