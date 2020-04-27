$(document).ready(function() {
	
	    
    /* ======= jQuery form validator ======= */
    $("#contact-form").validate({
		messages: {
		
		    name: {
    			required: 'Please enter your name'
			},
			email: {
				required: 'Please enter your email'
			},		
			message: {
				required: 'Please enter your message'
			}
			
		}
		
	});
    

});