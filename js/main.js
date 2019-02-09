//script for carousel for step by step form validation 
// and next+prev buttons
$(document).ready(function() {
    var form_stepper = $('.form-stepper').slick({
    	swipe: false,
        infinite: false,
        draggable: false,
        accessibility: false,
        prevArrow:"<button type='button' class='waves-effect waves-dark btn prev'><i class='chevron left icon'></i>Back </button>",
        nextArrow:"<button type='button' class='waves-effect waves-dark btn next'><i class='chevron right icon'></i>Next </button>",
        fnCanGoNext: function(instance, currentSlide){
            
            var currentSlide = instance.$slides.eq(currentSlide);
            var clickedIndex = $('.slick-active').attr("data-slick-index");

            if (clickedIndex == 0) {
            	
    //         	var proPic = currentSlide.find("#pro-pic-input");
    //         	var name = currentSlide.find("#full-name");
    //         	var contact = currentSlide.find("#contact");
    //         	var email = currentSlide.find("#email");
            
	 		// 	if (!proPic[0].validity.valid) {
				// 	$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("Please Upload Your Image");
				// 	return false;
				// } else if (!name[0].validity.valid) {
				// 	$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
				// 	name[0].reportValidity();
				// 	return false;
				// } else if (!contact[0].validity.valid) {
				// 	$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
				// 	contact[0].reportValidity();
				// 	return false;
				// } else if (!email[0].validity.valid) {
				// 	$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
				// 	email[0].reportValidity();
				// 	return false;
				// } else {
				// 	$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
				// 	return true;
				// }

            } else {
            	return true;
            }

            return true;
        }
    });

    var prevBtn = $('#total-form-div #dynamic-form-area form .form-stepper .prev');
    var nextBtn = $('#total-form-div #dynamic-form-area form .form-stepper .next');
	var finishBtn = $('#total-form-div #dynamic-form-area form #finishBtn');
	
	prevBtn.hide();
	finishBtn.hide();


	nextBtn.click(function(e) {
		
		console.log('rrrr');
	    var clickedIndex = $('.slick-active').attr("data-slick-index");

	    $('.form_stepper').slick('slickNext');

	    if (clickedIndex == 4) {
	    	finishBtn.transition('zoom');
	    	nextBtn.transition('zoom');

	    } else if (clickedIndex == 1) {
	    	prevBtn.transition('zoom');
	    } 
	});

	prevBtn.click(function(e) {
	    var clickedIndex = $('.slick-active').attr("data-slick-index");

	    if (clickedIndex == 0) {
	    	prevBtn.transition('zoom');
	    } else if (clickedIndex == 3) {
	    	nextBtn.transition('zoom');
	    	finishBtn.transition('zoom');
	    }
	});

	finishBtn.click(function(e) {
		finishBtn.transition('shake');
	});

});

//script to enable semantic dropdown
$('.ui.dropdown').dropdown();
$('.upward .dropdown')
  .dropdown({
    direction: 'upward'
  })
;

//script to set max & value field of hsc-year to current year
var hscYear = document.getElementById('hsc-year');
 
if (hscYear) {
	hscYear.value = (new Date()).getFullYear();
	hscYear.max = (new Date()).getFullYear();
}


$('#work-tab-2').hide();
$('#work-tab-3').hide();

function addTab(input) {

	if (input.id == "add-btn-1") {
		$('#work-tab-2').fadeIn(200);
	} else if (input.id == "add-btn-2") {
		$('#work-tab-3').fadeIn(200);
	}
}


$('#degrees').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#ms-degrees').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});

$('#fcps-degrees').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});

$('#services-1-1').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-1-2').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-1-3').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-1-4').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-1-5').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});

$('#services-1-6').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});

$('#services-1-7').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});

$('#services-1-8').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});

$('#services-2-1').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-2-2').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-2-3').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-2-4').multipleSelect({
	placeholder: "Tap Here to Select"
});

$('#services-2-5').multipleSelect({
	position: "top",
	placeholder: "Tap Here to Select"
});




(function($) {

    var tabs = $(".service-tab li a");

    $("#content").find('#two').hide();

    $("#content").find('#three').hide();

    tabs.click(function() {
        var content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");

        if (content == "#one") {

        	$("#content").find('#two').hide();
        	$("#content").find('#three').hide();
        	$(content).fadeIn(200);

        } else if (content == "#two") {

        	$("#content").find('#one').hide();
        	$("#content").find('#three').hide();
        	$(content).fadeIn(200);

        } else {

        	$("#content").find('#one').hide();
        	$("#content").find('#two').hide();
        	$(content).fadeIn(200);

        }
    });

})(jQuery);


(function($) {

    var tabs = $(".workplace-tab li a");

    $("#work-content").find('#work-two').hide();

    $("#work-content").find('#work-three').hide();

    tabs.click(function() {
        var content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");

        if (content == "#work-one") {

        	$("#work-content").find('#work-two').hide();
        	$("#work-content").find('#work-three').hide();
        	$(content).fadeIn(200);

        } else if (content == "#work-two") {

        	$("#work-content").find('#work-one').hide();
        	$("#work-content").find('#work-three').hide();
        	$(content).fadeIn(200);

        } else {

        	$("#work-content").find('#work-one').hide();
        	$("#work-content").find('#work-two').hide();
        	$(content).fadeIn(200);

        }
    });

})(jQuery);


//script for showing uploaded image
$('#hospital-pic-container #image-2').hide();
$('#hospital-pic-container #image-3').hide();

function readURL(input) {

    if (input.id == "pro-pic-input") {


	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#pro-pic-container img')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }
    	
    } else if (input.id == "hospital-pic-input-1-1") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-one #hospital-pic-container #image-1')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }

	    $('#work-one #hospital-pic-container #image-2').fadeIn(200);
    	
    } else if (input.id == "hospital-pic-input-1-2") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-one #hospital-pic-container #image-2')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }

	    $('#work-one #hospital-pic-container #image-3').fadeIn(200);
    	
    } else if (input.id == "hospital-pic-input-1-3") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-one #hospital-pic-container #image-3')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }
    	
    } else if (input.id == "hospital-pic-input-2-1") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-two #hospital-pic-container #image-1')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }

	    $('#work-two #hospital-pic-container #image-2').fadeIn(200);
    	
    } else if (input.id == "hospital-pic-input-2-2") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-two #hospital-pic-container #image-2')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }

	    $('#work-two #hospital-pic-container #image-3').fadeIn(200);
    	
    } else if (input.id == "hospital-pic-input-2-3") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-two #hospital-pic-container #image-3')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }
    	
    } else if (input.id == "hospital-pic-input-3-1") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-three #hospital-pic-container #image-1')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }

	    $('#work-three #hospital-pic-container #image-2').fadeIn(200);
    	
    } else if (input.id == "hospital-pic-input-3-2") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-three #hospital-pic-container #image-2')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }

	    $('#work-three #hospital-pic-container #image-3').fadeIn(200);
    	
    } else if (input.id == "hospital-pic-input-3-3") {

    	
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function(e) {
	            $('#work-three #hospital-pic-container #image-3')
	                .attr('src', e.target.result);
	        };

	        reader.readAsDataURL(input.files[0]);
	    }
    	
    }
}