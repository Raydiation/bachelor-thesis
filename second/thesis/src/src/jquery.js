(function ($, undefined){
  $(document).ready(function() {

    $.get('http://myurl.com/request.php', function(data) {
      if (data.isValid) {
        $('#field .info div').text('The request was successful');
      } else {
        $('#field .info div').text('The request was not successful');
      }
    });

  });
})(jQuery);