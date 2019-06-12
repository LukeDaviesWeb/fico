<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<!-- google fonts link -->
		<link href="https://fonts.googleapis.com/css?family=Raleway:300|Stardos+Stencil&display=swap" rel="stylesheet">
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
					<div class="desktop-top">	
						<div class="left">
							<div class="logo-container">
								<div class="logo"></div>
							</div>
						</div>
						<div class="right">
							<div class="contact">
								<div class="email-container">
									<a href="#">fi@ficodesign.com</a>
								</div>
								<div class="socials-container">
									<ul>
										<li>
											<i class="fab fa-instagram"></i>
										</li>

										<li>
											<i class="fab fa-facebook-f"></i>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="desktop-bottom">
						<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
					</div>
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

					<div class="logo">LOGO</div>
				</div>
			</nav>
			<div id="container">