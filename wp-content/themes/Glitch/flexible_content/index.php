<?php

// flexible_content
// ----------------
// This file will check if the ACF field 'flexible_content' is defined.
// If it is, it will loop through each field and render the correct template
// based on the layout type (Eg. 'test_layout_1' renders 'templates/test_layout_1.php').
// ----------------
// If adding a new layout, please create a new template in the 'templates' directory named 'LAYOUT_NAME.php'

if( have_rows('flexible_content') ):

    while ( have_rows('flexible_content') ) : the_row();

    	get_template_part('flexible_content/templates/' . get_row_layout());


    endwhile;

else :

    // No layouts found.

endif;



?>
