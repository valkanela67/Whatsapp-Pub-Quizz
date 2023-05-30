(function($){
        "use strict";
			$('#whatsAppAnyForm').appPlugin( 
				{
					whatsappPhone: '+385917331797', // Your Whatsapp Number, on which you want to send message.
					submissionMessage: 'You have been redirected to the WhatsApp to submit the message. Thank you.' // form submission message
				});	
})(jQuery);