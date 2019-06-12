<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<!-- google fonts link -->
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<!-- fontawesome link -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width" />
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div id="wrapper" class="hfeed">
			<nav id="menu" role="navigation">
				<!--<div id="search">
				<?php// get_search_form();; ?>
				</div>-->
				<div class="desktop-menu">
					<div class="logo-container">Logo</div>
					<p>desktop nav</p>
					<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
				</div>
				
				<div class="mobile-menu">
					
					<div class="mobile-menu-icon">
						<i class="fas fa-bars"></i>
					</div>

					<div class="mobile-menu-slidout display-none">
						<div class="menu-container">
							<div class="menu-exit-icon">X</div>
							<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
						</div>
					</div>
				</div>
			</nav>
			<header id="inner-page-header" role="banner">
				<div class="filter">
					<h1>Inner page Header</h1>
				</div>
			</header>

			<div id="container">