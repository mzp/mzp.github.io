/*!
  AsakusaSatellite Jump detector
*/

(function($, document, window, undefined){
    window.addEventListener('message', function(e){
        switch(e.data.type) {
        case "create":
            var prevId = e.data.data.prev_id;
            var messages = $(".message");
            if (messages.length > 1) {
                var lastMessage = $(messages[messages.length - 2]);
                if (prevId != lastMessage.attr("message-id")) {
                    lastMessage.css("border-bottom","2px dashed #aaa");
                }
            }
            break;
        default:
        }
    }, false);
})(jQuery, document, window);
