<?php /* TEMPLATE NAME: News Page */ ?>
<?php include get_template_directory() . '/inner-page-header.php';?>


<section id="news-page-content" class="template-container" role="main">

    <div class="news-section page-section">
        <h1>News</h1><p> this one gets all 'news' posts</p>

            <?php 
            $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; 
            // the query
            $wpb_all_query = new WP_Query(array('post_type'=>'post', 'category_name'=>'news', 'post_status'=>'publish', 'posts_per_page'=>3, 'paged' => $paged)); 

            ?>
            
            <?php if ( $wpb_all_query->have_posts() ) : ?>
       
            <ul>
                <!-- the loop -->
                <?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>
                    <a href="<?php the_permalink(); ?>">
                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            <?php the_post_thumbnail('medium');?>
                            <header class="entry-header">
                                <h4 class="entry-title"><?php the_title(); ?></h4>
                            </header>
                            <div class="entry-content">
                                <?php the_excerpt(); ?>
                                <a href="<?php the_permalink(); ?>">Read More</a>
                            </div>
                        </article>
                    </a>
                <?php endwhile;?>
                <!-- end of the loop -->
            </ul>
                <!-- Pagination  -->
                <?php if (function_exists("pagination")) {
                    pagination($wpb_all_query->max_num_pages);
                } ?>
            
            
        
            <?php wp_reset_postdata(); ?>
        
            <?php else : ?>
                <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>       

      
    </div>
</section>


<?php get_footer(); ?>