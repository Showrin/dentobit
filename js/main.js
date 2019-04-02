//script for carousel for step by step form validation 
// and next+prev buttons
$(document).ready(function() {

    var formValidityChecker = true;//for avoiding wrong button transition

    var form_stepper = $('.form-stepper').slick({
    	swipe: false,
        infinite: false,
        draggable: false,
        accessibility: false,
        prevArrow:"<button id='slide-prev' type='button' class='waves-effect waves-dark btn prev'><i class='chevron left icon'></i>Back </button>",
        nextArrow:"<button id='slide-next' type='button' class='waves-effect waves-dark btn next'><i class='chevron right icon'></i>Next </button>",
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
					formValidityChecker = false;
					return false;

				} else if (!name[0].validity.valid) {

					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					var value = $('.name-field #full-name').val();

					if (value == "") {
    					$('.name-field #full-name').attr("placeholder", "Please fill out the field");
					} else {
            			$('.name-field #full-name').val('');
    					$('.name-field #full-name').attr("placeholder", "Only Alphabates and dot(.) are allowed");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!contact[0].validity.valid) {

					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					var value = $('.contact-field #contact').val();

					if (value == "") {
    					$('.contact-field #contact').attr("placeholder", "Please fill out the field");
					} else {
            			$('.contact-field #contact').val('');
    					$('.contact-field #contact').attr("placeholder", "Only Digits are allowed and should be 11 digits");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!email[0].validity.valid) {

					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
					var value = $('.email-field #email').val();

					if (value == "") {
    					$('.email-field #email').attr("placeholder", "Please fill out the field");
					} else {
            			$('.email-field #email').val('');
    					$('.email-field #email').attr("placeholder", "Please give a valid email address");
					}
            		
            		formValidityChecker = false;
					return false;

				} else {

					$('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");
            		formValidityChecker = true;
					return true;

				}

            } else if (clickedIndex == 1) {

            	var college = currentSlide.find("#dental-college-name");
            	var hscYear = currentSlide.find("#hsc-year");
    			var degrees = currentSlide.find("#degrees");
    			var batch = currentSlide.find("#batch");
    			var bmdc = currentSlide.find("#bmdc-reg-no");
    			

    			if (!college[0].validity.valid) {

					var value = $('.college-field #dental-college-name').val();

					if (value == "") {
    					$('.college-field .default').addClass('error').text("Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!hscYear[0].validity.valid) {

					var value = $('.hsc-field #hsc-year').val();
					var hscYear = document.getElementById('hsc-year');
					var currentYear = (new Date()).getFullYear();

					if (value < 1950) {
    					$('.hsc-field #hsc-year').val(1950);
					} else {
            			$('.hsc-field #hsc-year').val(currentYear);
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!degrees[0].validity.valid) {

    				$('.degree-field .placeholder').addClass("error").text("Please Choose at least one");
            		formValidityChecker = false;
            		return false;

            	} else if (!bmdc[0].validity.valid) {

            		$('.bmdc-field #bmdc-reg-no').val('');
     				$('.bmdc-field #bmdc-reg-no').attr("placeholder", "Should be 4-5 digits");
     				formValidityChecker = false;
     				return false;
            	} else {
            		formValidityChecker = true;
            		return true;
            	}

            } else if (clickedIndex == 2) {

            	var nid = currentSlide.find('#nid');
            	var academicRank = currentSlide.find('#academic-rank');
            	var appointmentContact = currentSlide.find('#appointment-contact');
            	var consultFee = currentSlide.find('#consult-fee');

            	if (!nid[0].validity.valid) {

					var value = $('.nid-field #nid').val();

					if (value == "") {
    					$('.nid-field #nid').attr("placeholder", "Please fill out the field");
					} else {
            			$('.nid-field #nid').val('');
    					$('.nid-field #nid').attr("placeholder", "Only Digits are allowed");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!academicRank[0].validity.valid) {

					var value = $('.academic-rank-field #academic-rank').val();

					if (value == "") {
    					$('.academic-rank-field .default').addClass('error').text("Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!appointmentContact[0].validity.valid) {

					var value = $('.appointment-contact-field #appointment-contact').val();

					if (value == "") {
    					$('.appointment-contact-field #appointment-contact').attr("placeholder", "Please fill out the field");
					} else {
            			$('.appointment-contact-field #appointment-contact').val('');
    					$('.appointment-contact-field #appointment-contact').attr("placeholder", "Only Digits are allowed and should be 11 digits");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!consultFee[0].validity.valid) {

					var value = $('.consult-fee-field #consult-fee').val();


					if (value == "") {
    					$('.consult-fee-field #consult-fee').attr("placeholder", "Please fill out the field");
					} else {
						$('.consult-fee-field #consult-fee').val('');
						$('.consult-fee-field #consult-fee').attr("placeholder", "Only rounded values are acceptable");
					}

            		formValidityChecker = false;
					return false;

				} else {
            		formValidityChecker = true;
            		return true;
            	}

            } else if (clickedIndex == 3) {

            	var workplaceName_1 = currentSlide.find('#work-one .workplace-name-field #workplace-name');
            	var workplaceAddr_1 = currentSlide.find('#work-one .workplace-addr-field #workplace-addr');
            	var houseAddr_1 = currentSlide.find('#work-one .house-addr-field #house-addr');
            	var road_1 = currentSlide.find('#work-one .road-field #road');
            	var thana_1 = currentSlide.find('#work-one .thana-field #thana');
            	var district = currentSlide.find('#work-one .district-field #district');
            	var gmap_addr = currentSlide.find('#work-one .gmap-addr-field #gmap-addr');


            	if (!workplaceName_1[0].validity.valid) {

					var value = workplaceName_1.val();

					if (value == "") {
    					workplaceName_1.attr("placeholder", "Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!gmap_addr[0].validity.valid) {

					var value = gmap_addr.val();

					if (value == "") {
    					gmap_addr.attr("placeholder", "Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!workplaceAddr_1[0].validity.valid) {

					var value = workplaceAddr_1.val();

					if (value == "") {
    					$('#work-one .workplace-addr-field').addClass('red-placeholder');
    					workplaceAddr_1.attr("placeholder", "Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				// } else if (!houseAddr_1[0].validity.valid) {

				// 	var value = houseAddr_1.val();

				// 	if (value == "") {
    // 					houseAddr_1.attr("placeholder", "Please fill out the field");
				// 	}
            		
    //         		formValidityChecker = false;
				// 	return false;

				// } else if (!road_1[0].validity.valid) {

				// 	var value = road_1.val();

				// 	if (value == "") {
    // 					road_1.attr("placeholder", "Please fill out the field");
				// 	}
            		
    //         		formValidityChecker = false;
				// 	return false;

				} else if (!thana_1[0].validity.valid) {

					var value = thana_1.val();

					if (value == "") {
    					$('.thana-field .default').addClass('error').text("Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				} else if (!district[0].validity.valid) {

					var value = district.val();

					if (value == "") {
    					$('.district-field .default').addClass('error').text("Please fill out the field");
					}
            		
            		formValidityChecker = false;
					return false;

				} else {
            		formValidityChecker = true;
            		return true;

				}

            } else {
            	formValidityChecker = true;
            	return true;
            }

            formValidityChecker = true;
            return true;
        }
    });

    var prevBtn = $('#total-form-div #dynamic-form-area form .form-stepper .prev');
    var nextBtn = $('#total-form-div #dynamic-form-area form .form-stepper .next');
	var finishBtn = $('#total-form-div #dynamic-form-area form #finishBtn');
	
	prevBtn.hide();
	finishBtn.hide();


	nextBtn.click(function(e) {

	    var clickedIndex = $('.slick-active').attr("data-slick-index");
		
		console.log(formValidityChecker);

	    if (clickedIndex == 4 && formValidityChecker == true) {
	    	$('#service-next').show();
	    	nextBtn.hide();

	    } else if (clickedIndex == 1 && formValidityChecker == true) {
	    	prevBtn.fadeIn(50);
	    } else if (clickedIndex == 5 && formValidityChecker == true) {
	    	prevBtn.show();
	    	$('#service-prev').hide();
	    	nextBtn.hide();
	    	finishBtn.fadeIn(50);
	    } 
	});

	prevBtn.click(function(e) {
	    var clickedIndex = $('.slick-active').attr("data-slick-index");
	    
	    if (clickedIndex == 0 && formValidityChecker == true) {
	    	prevBtn.fadeOut(50);
	    } else if (clickedIndex == 3 && formValidityChecker == true) {
	    	$('#service-next').hide();
	    	nextBtn.show();
	    } else if (clickedIndex == 4 && formValidityChecker == true) {
	    	$('#service-prev').show();
	    	prevBtn.hide();
	    	nextBtn.fadeIn();
	    	finishBtn.hide();
	    } 
	});

	// finishBtn.click(function(e) {
	// 	finishBtn.transition('shake');
	// });
		

	$(document).ready(function() {
		$('#success-container').transition('zoom');
	})

	//script to remove error class from dental college field
	$('.college-field .item').click( function(e) {
		$('.college-field .text').removeClass('error');
	});

	//script to remove error class from degree field
	$('.degree-field .ms-drop li').click( function(e) {
		$('.degree-field .ms-parent span').removeClass('error');
	});

	//script to remove error class from academic rank field
	$('.academic-rank-field .item').click( function(e) {
		$('.academic-rank-field .text').removeClass('error');
	});

	//script to remove error class from thana field
	$('.thana-field .item').click( function(e) {
		$('.thana-field .text').removeClass('error');
	});

	//script to remove error class from district field
	$('.district-field .item').click( function(e) {
		$('.district-field .text').removeClass('error');
	});

});




//script to enable semantic dropdown
$('.ui.dropdown').dropdown();
$('.upward .dropdown')
  .dropdown({
    direction: 'upward'
  });

//script to enable semantic checkbox
$('.ui.radio.checkbox')
  .checkbox()
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
		$('#work-tab-2').trigger("click");
	} else if (input.id == "add-btn-2") {
		$('#work-tab-3').fadeIn(200);
		$('#work-tab-3').trigger("click");
	}
}


$('#remove-tab-2').click(function(e){
		e.stopPropagation();
		$('#work-tab-2').fadeOut(200);
		$('#work-tab-1').trigger("click");
});

$('#remove-tab-3').click(function(e){
		e.stopPropagation();
		$('#work-tab-3').fadeOut(200);

		if ($('#work-tab-2').css("display") == "block") {
			
			$('#work-tab-2').trigger("click");

		} else {

			$('#work-tab-1').trigger("click");

		}
});



// $("#full-list-btn").click(function() {

// 	$("#dynamic-form-area form").hide();
// 	$("#dynamic-form-area #dr-list-body").fadeIn(200);
// 	$("#full-list-btn").hide();
// 	$("#back-list-btn").fadeIn(200);

// });

// $("#back-list-btn").click(function() {

// 	$("#dynamic-form-area #dr-list-body").hide();
// 	$("#dynamic-form-area form").fadeIn(200);
// 	$("#back-list-btn").hide();
// 	$("#full-list-btn").fadeIn(200);

// });



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
	placeholder: "Tap Here to Select"
});

$('#services-2-6').multipleSelect({
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
        	$('#slide-prev').show();
			$('#service-prev').hide();
			$('#slide-next').fadeOut(50);
			$('#service-next').fadeIn(50);

        } else if (content == "#two") {

        	$("#content").find('#one').hide();
        	$("#content").find('#three').hide();
        	$(content).fadeIn(200);
        	$('#slide-prev').hide();
			$('#service-prev').show();
			$('#slide-next').fadeOut(50);
			$('#service-next').fadeIn(50);

        } else {

        	$("#content").find('#one').hide();
        	$("#content").find('#two').hide();
        	$(content).fadeIn(200);
        	$('#slide-prev').hide();
			$('#service-prev').show();
			$('#service-next').fadeOut(50);
			$('#slide-next').fadeIn(50);

        }
    });

})(jQuery);


// (function($) {

//     var tabs = $(".workplace-tab li a");

//     $("#work-content").find('#work-two').hide();

//     $("#work-content").find('#work-three').hide();

//     tabs.click(function() {
//         var content = this.hash.replace('/', '');
//         tabs.removeClass("active");
//         $(this).addClass("active");

//         if (content == "#work-one") {

//         	$("#work-content").find('#work-two').hide();
//         	$("#work-content").find('#work-three').hide();
//         	$(content).fadeIn(200);

//         } else if (content == "#work-two") {

//         	$("#work-content").find('#work-one').hide();
//         	$("#work-content").find('#work-three').hide();
//         	$(content).fadeIn(200);

//         } else {

//         	$("#work-content").find('#work-one').hide();
//         	$("#work-content").find('#work-two').hide();
//         	$(content).fadeIn(200);

//         }
//     });

// })(jQuery);


//script for service page step controlling
$('#service-next').click ( function(e) {

	if($('#content #one').css("display") == 'block') {
		
		$('#service-tab-2').trigger("click");

	} else if ($('#content #two').css("display") == 'block') {

		$('#service-tab-3').trigger("click");

	}
});

$('#service-prev').click ( function(e) {

	if($('#content #two').css("display") == 'block') {
		
		$('#service-tab-1').trigger("click");

	} else if($('#content #three').css("display") == 'block') {
		
		$('#service-tab-2').trigger("click");

	}
});


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
	        $('#total-form-div #dynamic-form-area form .form-stepper .step .form-field-holder .row .col center .error-message').text("");

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

$(document).keypress(
    function(event) {
	    if (event.which == '13') {
	        event.preventDefault();
	    }
});