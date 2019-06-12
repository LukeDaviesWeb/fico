<?php include get_template_directory() . '/inner-page-header.php';?>
<section id="content" role="main">

  <section class="template-container">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_post_thumbnail('medium_large');?>
    <?php echo get_the_date(); ?>
    <?php the_title();?>
    <?php the_content();?>

    <?php endwhile; endif; ?>
  </section>

</section>

<?php get_footer(); ?>