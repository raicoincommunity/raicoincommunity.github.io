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

    $.formatInt = function(data){ 
      return data.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
    };

    $.formatSupply = $.formatInt;
    $.formatBalance = function(data){
      while (data.length < 10)
      {
        data = '0' + data;
      }
      data = $.formatInt(data.substring(0, data.length - 9))
           + '.' + data.substring(data.length - 9);
      while (data[data.length - 1] == '0')
      {
        data = data.substring(0, data.length - 1);
      }
      if (data[data.length - 1] == '.')
      {
        data = data.substring(0, data.length - 1);
      }
      return data + ' RAI';
    };
    
  })(jQuery); // End of use strict
  