<?php /* TEMPLATE NAME: Gallery Page */ ?>
<?php include get_template_directory() . '/inner-page-header.php';?>

<section id="gallery-page-content" class="template-container" role="main">

    <div class="gallery-title-section page-section">
        <h1>Gallery</h1>
    </div>

    <?php include('utils/lightboxGallery.php') ?>


   

</section>

<?php get_footer(); ?>