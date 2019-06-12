<div class="accordion js-accordion">
  <div class="accordion__item js-accordion-item">
    <div class="accordion-header js-accordion-header">Panel 1</div> 
    <div class="accordion-body js-accordion-body">
      <div class="accordion-body__contents">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
      </div>
    </div><!-- end of accordion body -->

  </div><!-- end of accordion item -->

  <div class="accordion__item js-accordion-item active">
    <div class="accordion-header js-accordion-header">Panel 2</div> 
    <div class="accordion-body js-accordion-body">
      <div class="accordion-body__contents">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
      </div>
    </div><!-- end of accordion body -->
  </div><!-- end of accordion item -->


  
  <div class="accordion__item js-accordion-item">
    <div class="accordion-header js-accordion-header">Panel 3</div> 
    <div class="accordion-body js-accordion-body">
      <div class="accordion-body__contents">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
      </div>
      <div class="accordion js-accordion">
        <div class="accordion__item js-accordion-item">
           <div class="accordion-header js-accordion-header">Sub Panel 1</div> 
           <div class="accordion-body js-accordion-body">
             <div class="accordion-body__contents">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
             </div><!-- end of sub accordion item body contents -->
           </div><!-- end of sub accordion item body -->
        </div><!-- end of sub accordion item -->
        <div class="accordion__item js-accordion-item">
           <div class="accordion-header js-accordion-header">Sub Panel 2</div> 
           <div class="accordion-body js-accordion-body">
             <div class="accordion-body__contents">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi placeat distinctio dolor, amet magnam voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum et repudiandae vel sed, explicabo in?
             </div><!-- end of sub accordion item body contents -->
           </div><!-- end of sub accordion item body -->
        </div><!-- end of sub accordion item -->
      </div><!-- end of sub accordion -->
    </div><!-- end of accordion body -->
  </div><!-- end of accordion item -->
</div><!-- end of accordion -->





<script>
var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});
</script>