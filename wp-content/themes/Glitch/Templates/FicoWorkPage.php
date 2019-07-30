<?php /* TEMPLATE NAME: Fico Work Page */ ?>
<?php get_header(); ?>
<section id="work-page-content" class="template-container" role="main">
  <div class="work-grid">
    <!-- Row One -->
    <div class="tile tile-01"></div>
    <div class="tile tile-02"></div>
    <div class="tile tile-03"></div>
    <!-- Row Two -->
    <div class="tile tile-04"></div>
    <div class="tile tile-05"></div>
    <div class="tile tile-06"></div>
    <!-- Row Three -->
    <div class="tile tile-07"></div>
    <div class="tile tile-08"></div>
    <div class="tile tile-09"></div>
    <!-- Row Four -->
    <div class="tile tile-10"></div>
    <div class="tile tile-11"></div>
    <div class="tile tile-12"></div>
    <!-- Row Five -->
    <div class="tile tile-13"></div>
    <div class="tile tile-14"></div>
    <div class="tile tile-15"></div>
  </div>

  <div class="slider-container">
    <?php echo do_shortcode('[metaslider id="64"]'); ?>
  </div>
  <?php include('utils/form.php') ?>
</section>

<?php get_footer(); ?>