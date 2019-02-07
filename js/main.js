//script for carousel for step by step form validation 
// and next+prev buttons
$(document).ready(function() {
    var form_stepper = $('.form-stepper').slick({
        swipe: false,
        infinite: false,
        draggable: false,
        accessibility: false,
        prevArrow:"<button type='button' class='waves-effect waves-dark btn prev'><i class='chevron left icon'></i></i>Back </button>",
        nextArrow:"<button type='button' class='waves-effect waves-dark btn next'><i class='chevron right icon'></i></i>Next </button>",
        fnCanGoNext: function(instance, currentSlide){
            
            var currentSlide = instance.$slides.eq(currentSlide);
            var clickedIndex = $('.slick-active').attr("data-slick-index");

            if (clickedIndex == 0) {
            	
            	var proPic = currentSlide.find("#pro-pic-input");
            	var name = currentSlide.find("#full-name");
            	var contact = currentSlide.find("#contact");
            	var email = currentSlide.find("#email");
            
	 			if (!proPic[0].validity.valid) {
					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("Please Upload Your Image");
					return false;
				} else if (!name[0].validity.valid) {
					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					name[0].reportValidity();
					return false;
				} else if (!contact[0].validity.valid) {
					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					contact[0].reportValidity();
					return false;
				} else if (!email[0].validity.valid) {
					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					email[0].reportValidity();
					return false;
				} else {
					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					return true;
				}

            } else {
            	return true;
            }
        }
    });

    var prevBtn = $('#total-form-div #dynamic-form-area form .form-stepper .prev');
    var nextBtn = $('#total-form-div #dynamic-form-area form .form-stepper .next');
	var finishBtn = $('#total-form-div #dynamic-form-area form #finishBtn');
	
	prevBtn.hide();
	finishBtn.hide();


	nextBtn.click(function(e) {
	    var clickedIndex = $('.slick-active').attr("data-slick-index");

	    $('.form_stepper').slick('slickNext');

	    if (clickedIndex == 4) {
	    	nextBtn.transition('zoom');
	    	finishBtn.transition('zoom');

	    } else if (clickedIndex == 4) {
	    	nextBtn.transition('shake'); 

	    } else if (clickedIndex == 1) {
	    	prevBtn.transition('zoom');
	    } 
	});

	prevBtn.click(function(e) {
	    var clickedIndex = $('.slick-active').attr("data-slick-index");

	    if (clickedIndex == 0) {
	    	prevBtn.transition('zoom');
	    } else if (clickedIndex == 3) {
	    	finishBtn.transition('zoom');
	    	nextBtn.transition('zoom');
	    }
	});

	finishBtn.click(function(e) {
		finishBtn.transition('shake');
	});

});


//script for showing uploaded image
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#total-form-div #dynamic-form-area .form-stepper .step .form-field-holder #pro-pic-container img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//script to enable semantic dropdown
$('.ui.dropdown').dropdown();
