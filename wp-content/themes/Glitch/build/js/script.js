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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSBqUXVlcnlcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdC8vY2FsbCBmdW5jdGlvbnNcblx0dG9nZ2xlTW9iaWxlTWVudSgpXG5cdGhpZGVNb2JpbGVPblJlc2l6ZSgpXG5cblx0Ly9iaW5kIGV2ZW50IGxpc3RlbmVycyBvbmNlIGRvYyByZWFkeVxuXHQkKHdpbmRvdykucmVzaXplKGhpZGVNb2JpbGVPblJlc2l6ZSlcbn0pXG5cbi8vZXZlbnQgbGlzdGVuZXJzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcIndwY2Y3c3VibWl0XCIsXG5cdGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0c3VibWl0Rm9ybVRvU2hlZXRzKClcblx0fSxcblx0ZmFsc2VcbilcblxuLy9zZXR1cCBmdW5jdGlvbnNcbiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvID0ge31cblx0dmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KClcblx0JC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuXHRcdGlmIChvW3RoaXMubmFtZV0pIHtcblx0XHRcdGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcblx0XHRcdFx0b1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV1cblx0XHRcdH1cblx0XHRcdG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgXCJcIilcblx0XHR9IGVsc2Uge1xuXHRcdFx0b1t0aGlzLm5hbWVdID0gdGhpcy52YWx1ZSB8fCBcIlwiXG5cdFx0fVxuXHR9KVxuXHRyZXR1cm4gb1xufVxuXG4vL2RlZmluZSBjdXN0b20gZnVuY3Rpb25zIGhlcmVcbmZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XG5cdC8vdmFyaWFibGVzXG5cdGxldCBtb2JpbGVJY29uQ29udGFpbmVyID0gJChcIi5tb2JpbGUtbWVudS1pY29uXCIpXG5cdGxldCBtb2JpbGVNZW51ID0gJChcIi5tb2JpbGUtbWVudS1zbGlkb3V0XCIpXG5cdC8vZnVuY1xuXHQkKG1vYmlsZUljb25Db250YWluZXIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkKG1vYmlsZU1lbnUpLmhhc0NsYXNzKFwiZGlzcGxheS1ub25lXCIpKSB7XG5cdFx0XHQkKG1vYmlsZU1lbnUpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG5cdFx0fSBlbHNlIHtcblx0XHRcdCQobW9iaWxlTWVudSkuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcblx0XHR9XG5cdH0pXG5cblx0JChcIi5tZW51LWV4aXQtaWNvblwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKG1vYmlsZU1lbnUpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIGhpZGVNb2JpbGVPblJlc2l6ZSgpIHtcblx0Ly92YXJpYWJsZXNcblx0bGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKClcblx0bGV0IG1vYmlsZU1lbnUgPSAkKFwiLm1vYmlsZS1tZW51LXNsaWRvdXRcIilcblx0Ly9mdW5jXG5cdGlmICh3aW5kb3dXaWR0aCA+IDQ1MCkge1xuXHRcdCQobW9iaWxlTWVudSkuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcblx0fVxufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtVG9TaGVldHMoKSB7XG5cdC8vdmFyaWFibGVzXG5cdGxldCB1cmwgPVxuXHRcdFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6bFJzWk5uMFRuMHczNUYtSGtsQ3U0Zk9yVE8tUUozTF9pY1RqbWRZZmRQZV9qWVRVL2V4ZWNcIlxuXHQkZm9ybURhdGEgPSAkKFwiLndwY2Y3LWZvcm1cIikuc2VyaWFsaXplT2JqZWN0KClcblxuXHR2YXIganF4aHIgPSAkLmFqYXgoe1xuXHRcdHVybDogdXJsLFxuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRkYXRhVHlwZTogXCJqc29uXCIsXG5cdFx0ZGF0YTogJGZvcm1EYXRhXG5cdH0pLnN1Y2Nlc3MoY29uc29sZS5sb2coXCJzdWJtaXR0ZWQgdG8gZ29vZ2xlIHNoZWV0c1wiKSlcbn1cblxuLy8gLy9Nb2RhbCBsaWdodGJveCBnYWxsZXJ5XG5cbi8vIC8vIE9wZW4gdGhlIE1vZGFsXG4vLyBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vIH1cblxuLy8gLy8gQ2xvc2UgdGhlIE1vZGFsXG4vLyBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH1cblxuLy8gdmFyIHNsaWRlSW5kZXggPSAxO1xuLy8gc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcblxuLy8gLy8gTmV4dC9wcmV2aW91cyBjb250cm9sc1xuLy8gZnVuY3Rpb24gcGx1c1NsaWRlcyhuKSB7XG4vLyAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcbi8vIH1cblxuLy8gLy8gVGh1bWJuYWlsIGltYWdlIGNvbnRyb2xzXG4vLyBmdW5jdGlvbiBjdXJyZW50U2xpZGUobikge1xuLy8gICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBuKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XG4vLyAgIHZhciBpO1xuLy8gICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xuLy8gICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZW1vXCIpO1xuLy8gICB2YXIgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcHRpb25cIik7XG4vLyAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMSB9XG4vLyAgIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCB9XG4vLyAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICB9XG4vLyAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbi8vICAgfVxuLy8gICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vICAgZG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuLy8gICBjYXB0aW9uVGV4dC5pbm5lckhUTUwgPSBkb3RzW3NsaWRlSW5kZXggLSAxXS5hbHQ7XG4vLyB9XG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
