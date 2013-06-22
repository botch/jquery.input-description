jQuery(function($){
  $.fn.inputDescription = function(config) {
    var defaults = {
      value:'',
      color:'#aaaaaa'
    }
    var options = $.extend(defaults, config);
    var input = $(this);

    function setValue() {
      if(input.val() == '' || input.val() == options.value) {
        input.val(options.value).css('color', options.color);
      }
    }

    input
      .each(setValue)
      .blur(setValue)
      .focus(function() {
        if(input.val() == options.value) {
          input.val('');
        }
        input.css('color', '#000');
      });

    $('form').submit(function() {
      if(input.val() == options.value) {
        input.val('');
      }
    });
  };
});