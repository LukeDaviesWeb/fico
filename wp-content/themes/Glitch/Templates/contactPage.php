<?php /* TEMPLATE NAME: Contact Page */ ?>
<?php include get_template_directory() . '/inner-page-header.php';?>

<section id="contact-page-content" class="template-container" role="main">

<div class="form-section page-section">
    <h1>Contact Page</h1>
    <div class="contact-form-container">
        <?php echo do_shortcode('[contact-form-7 id="41" title="Contact form"]') ?>
    </div>

</div>

<div class="map-container">
   <?php include('utils/map.php') ?>
</div>
    
</section>


<?php get_footer(); ?>