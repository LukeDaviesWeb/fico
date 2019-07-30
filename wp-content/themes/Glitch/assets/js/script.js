var $ = jQuery

$(document).ready(function() {
	//call functions
	toggleMobileMenu()
	hideMobileOnResize()

	//bind event listeners once doc ready
	$(window).resize(hideMobileOnResize)
})

//event listeners
document.addEventListener(
	"wpcf7submit",
	function(event) {
		submitFormToSheets()
	},
	false
)

//setup functions
$.fn.serializeObject = function() {
	var o = {}
	var a = this.serializeArray()
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]]
			}
			o[this.name].push(this.value || "")
		} else {
			o[this.name] = this.value || ""
		}
	})
	return o
}

//define custom functions here
function toggleMobileMenu() {
	//variables
	let mobileIconContainer = $(".mobile-menu-icon")
	let mobileMenu = $(".mobile-menu-slidout")
	//func
	$(mobileIconContainer).click(function() {
		if ($(mobileMenu).hasClass("display-none")) {
			$(mobileMenu).removeClass("display-none")
		} else {
			$(mobileMenu).addClass("display-none")
		}
	})

	$(".menu-exit-icon").click(function() {
		$(mobileMenu).addClass("display-none")
	})
}

function hideMobileOnResize() {
	//variables
	let windowWidth = $(window).width()
	let mobileMenu = $(".mobile-menu-slidout")
	//func
	if (windowWidth > 450) {
		$(mobileMenu).addClass("display-none")
	}
}

function submitFormToSheets() {
	//variables
	let url =
		"https://script.google.com/macros/s/AKfycbzlRsZNn0Tn0w35F-HklCu4fOrTO-QJ3L_icTjmdYfdPe_jYTU/exec"
	$formData = $(".wpcf7-form").serializeObject()

	var jqxhr = $.ajax({
		url: url,
		method: "GET",
		dataType: "json",
		data: $formData
	}).success(console.log("submitted to google sheets"))
}

// //Modal lightbox gallery

// // Open the Modal
// function openModal() {
//   document.getElementById('myModal').style.display = "block";
// }

// // Close the Modal
// function closeModal() {
//   document.getElementById('myModal').style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "flex";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }
