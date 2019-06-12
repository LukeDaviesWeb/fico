<!-- Images used to open the lightbox -->
<div class="row">
  <div class="column">
    <img class="img-grid-size" src="https://images.pexels.com/photos/2104499/pexels-photo-2104499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="openModal();currentSlide(1)" class="hover-shadow">
  </div>
  <div class="column">
    <img class="img-grid-size" src="https://images.pexels.com/photos/1850313/pexels-photo-1850313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="openModal();currentSlide(2)" class="hover-shadow">
  </div>
  <div class="column">
    <img class="img-grid-size" src="https://images.pexels.com/photos/2083472/pexels-photo-2083472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="openModal();currentSlide(3)" class="hover-shadow">
  </div>
  <div class="column">
    <img class="img-grid-size" src="https://images.pexels.com/photos/1253718/pexels-photo-1253718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="openModal();currentSlide(4)" class="hover-shadow">
  </div>
</div>

<!-- The Modal/Lightbox -->
<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img class="img-fullsize" src="https://images.pexels.com/photos/2104499/pexels-photo-2104499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 4</div>
      <img class="img-fullsize" src="https://images.pexels.com/photos/1850313/pexels-photo-1850313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img class="img-fullsize" src="https://images.pexels.com/photos/2083472/pexels-photo-2083472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    </div>

    <div class="mySlides">
      <div class="numbertext">4 / 4</div>
      <img class="img-fullsize" src="https://images.pexels.com/photos/1253718/pexels-photo-1253718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    </div>

    <!-- Next/previous controls -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- Caption text -->
    <div class="caption-container">
      <p id="caption"></p>
    </div>

    

    <!-- Thumbnail image controls -->
    <div class="column">
      <img class="img-thumbnail-size" src="https://images.pexels.com/photos/2104499/pexels-photo-2104499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="currentSlide(1)" alt="Nature">
    </div>

    <div class="column">
      <img class="img-thumbnail-size" src="https://images.pexels.com/photos/1850313/pexels-photo-1850313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="currentSlide(2)" alt="Snow">
    </div>

    <div class="column">
      <img class="img-thumbnail-size" src="https://images.pexels.com/photos/2083472/pexels-photo-2083472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="currentSlide(3)" alt="Mountains">
    </div>

    <div class="column">
      <img class="img-thumbnail-size" src="https://images.pexels.com/photos/1253718/pexels-photo-1253718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" onclick="currentSlide(4)" alt="Lights">
    </div>
  </div>
</div>