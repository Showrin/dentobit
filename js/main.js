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
            
            console.log("fnCanGoNext called");
            
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
	var form = document.querySelector("#sign-up-form");
	
	prevBtn.hide();


	nextBtn.click(function(e) {
	    var clickedIndex = $('.slick-active').attr("data-slick-index");
	    var checkValidity = false;
	    console.log(clickedIndex);

	    // if (!form.reportValidity()) {
	    // 	return false;
	    // }

	    $('.form_stepper').slick('slickNext');

	    if (clickedIndex == 4 && checkValidity) {
	    	nextBtn.transition('zoom');
	    	nextBtn.html("<i class='check right icon' style='color: #40b97d'></i></i><span style='color: #40b97d'>Finish</span>");
	    	nextBtn.transition('zoom');

	    } else if (clickedIndex == 4 && !checkValidity) {
	    	nextBtn.transition('shake'); 

	    } else if (clickedIndex == 1) {
	    	prevBtn.transition('zoom');
	    } else {
	        nextBtn.html("<i class='chevron right icon'></i></i>Next");
	    }
	});

	prevBtn.click(function(e) {
	    var clickedIndex = $('.slick-active').attr("data-slick-index");

	    if (clickedIndex == 0) {
	    	prevBtn.transition('zoom');
	    } else if (clickedIndex == 3) {
	    	nextBtn.transition('zoom');
	    	nextBtn.html("<i class='chevron right icon'></i></i>Next");
	    	nextBtn.transition('zoom');
	    } else {
	        nextBtn.html("<i class='chevron right icon'></i></i>Next");
	    }
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
