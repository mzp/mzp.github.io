// AsakusaSatellite Image Paster
(function($, document, window, undefined){
  $('form.inputarea').on('paste', function(event){
    var items = event.originalEvent.clipboardData.items;
    for (var i = 0, l = items.length; i < l; i++) {
      var item = items[i];
      if (item.type.indexOf("image") == -1) {
        continue;
      }

      var formData = new FormData();
      formData.append('file', item.getAsFile(), "screenshot.png");
      formData.append('room_id', AsakusaSatellite.current.room);
      formData.append('authenticity_token', AsakusaSatellite.form_auth);

      $.ajax(AsakusaSatellite.url.message , {
        type: 'POST',
        contentType: false,
        processData: false,
        data: formData
      });
    }
  });
})(jQuery, document, window);
