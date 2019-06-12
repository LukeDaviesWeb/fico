var $ = jQuery;

$(document).ready(function () {
  //call functions
  toggleMobileMenu();
  hideMobileOnResize();

  //bind event listeners once doc ready
  $(window).resize(hideMobileOnResize);
});

//event listeners
document.addEventListener(
  'wpcf7submit',
  function (event) {
    submitFormToSheets();
  },
  false
);

//setup functions
$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

//define custom functions here
function toggleMobileMenu() {
  //variables
  let mobileIconContainer = $('.mobile-menu-icon');
  let mobileMenu = $('.mobile-menu-slidout');
  //func
  $(mobileIconContainer).click(function () {
    if ($(mobileMenu).hasClass('display-none')) {
      $(mobileMenu).removeClass('display-none');
    } else {
      $(mobileMenu).addClass('display-none');
    }
  });

  $('.menu-exit-icon').click(function () {
    $(mobileMenu).addClass('display-none');
  });
}

function hideMobileOnResize() {
  //variables
  let windowWidth = $(window).width();
  let mobileMenu = $('.mobile-menu-slidout');
  //func
  if (windowWidth > 450) {
    $(mobileMenu).addClass('display-none');
  }
}

function submitFormToSheets() {
  //variables
  let url =
    'https://script.google.com/macros/s/AKfycbzlRsZNn0Tn0w35F-HklCu4fOrTO-QJ3L_icTjmdYfdPe_jYTU/exec';
  $formData = $('.wpcf7-form').serializeObject();

  var jqxhr = $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    data: $formData
  }).success(console.log('submitted to google sheets'));
}


//Modal lightbox gallery

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSBqUXVlcnk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy9jYWxsIGZ1bmN0aW9uc1xuICB0b2dnbGVNb2JpbGVNZW51KCk7XG4gIGhpZGVNb2JpbGVPblJlc2l6ZSgpO1xuXG4gIC8vYmluZCBldmVudCBsaXN0ZW5lcnMgb25jZSBkb2MgcmVhZHlcbiAgJCh3aW5kb3cpLnJlc2l6ZShoaWRlTW9iaWxlT25SZXNpemUpO1xufSk7XG5cbi8vZXZlbnQgbGlzdGVuZXJzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAnd3BjZjdzdWJtaXQnLFxuICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzdWJtaXRGb3JtVG9TaGVldHMoKTtcbiAgfSxcbiAgZmFsc2Vcbik7XG5cbi8vc2V0dXAgZnVuY3Rpb25zXG4kLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG8gPSB7fTtcbiAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICQuZWFjaChhLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9bdGhpcy5uYW1lXSkge1xuICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgIH1cbiAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvO1xufTtcblxuLy9kZWZpbmUgY3VzdG9tIGZ1bmN0aW9ucyBoZXJlXG5mdW5jdGlvbiB0b2dnbGVNb2JpbGVNZW51KCkge1xuICAvL3ZhcmlhYmxlc1xuICBsZXQgbW9iaWxlSWNvbkNvbnRhaW5lciA9ICQoJy5tb2JpbGUtbWVudS1pY29uJyk7XG4gIGxldCBtb2JpbGVNZW51ID0gJCgnLm1vYmlsZS1tZW51LXNsaWRvdXQnKTtcbiAgLy9mdW5jXG4gICQobW9iaWxlSWNvbkNvbnRhaW5lcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKG1vYmlsZU1lbnUpLmhhc0NsYXNzKCdkaXNwbGF5LW5vbmUnKSkge1xuICAgICAgJChtb2JpbGVNZW51KS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQobW9iaWxlTWVudSkuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1lbnUtZXhpdC1pY29uJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQobW9iaWxlTWVudSkuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZU1vYmlsZU9uUmVzaXplKCkge1xuICAvL3ZhcmlhYmxlc1xuICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgbGV0IG1vYmlsZU1lbnUgPSAkKCcubW9iaWxlLW1lbnUtc2xpZG91dCcpO1xuICAvL2Z1bmNcbiAgaWYgKHdpbmRvd1dpZHRoID4gNDUwKSB7XG4gICAgJChtb2JpbGVNZW51KS5hZGRDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybVRvU2hlZXRzKCkge1xuICAvL3ZhcmlhYmxlc1xuICBsZXQgdXJsID1cbiAgICAnaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6bFJzWk5uMFRuMHczNUYtSGtsQ3U0Zk9yVE8tUUozTF9pY1RqbWRZZmRQZV9qWVRVL2V4ZWMnO1xuICAkZm9ybURhdGEgPSAkKCcud3BjZjctZm9ybScpLnNlcmlhbGl6ZU9iamVjdCgpO1xuXG4gIHZhciBqcXhociA9ICQuYWpheCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIGRhdGE6ICRmb3JtRGF0YVxuICB9KS5zdWNjZXNzKGNvbnNvbGUubG9nKCdzdWJtaXR0ZWQgdG8gZ29vZ2xlIHNoZWV0cycpKTtcbn1cblxuXG4vL01vZGFsIGxpZ2h0Ym94IGdhbGxlcnlcblxuLy8gT3BlbiB0aGUgTW9kYWxcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBDbG9zZSB0aGUgTW9kYWxcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG52YXIgc2xpZGVJbmRleCA9IDE7XG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xuXG4vLyBOZXh0L3ByZXZpb3VzIGNvbnRyb2xzXG5mdW5jdGlvbiBwbHVzU2xpZGVzKG4pIHtcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4pO1xufVxuXG4vLyBUaHVtYm5haWwgaW1hZ2UgY29udHJvbHNcbmZ1bmN0aW9uIGN1cnJlbnRTbGlkZShuKSB7XG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xufVxuXG5mdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcbiAgdmFyIGk7XG4gIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XG4gIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbW9cIik7XG4gIHZhciBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwdGlvblwiKTtcbiAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxIH1cbiAgaWYgKG4gPCAxKSB7IHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIH1cbiAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICB9XG4gIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBkb3RzW3NsaWRlSW5kZXggLSAxXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IGRvdHNbc2xpZGVJbmRleCAtIDFdLmFsdDtcbn1cblxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
