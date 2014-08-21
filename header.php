<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Mauricio Fonseca</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="css/component.css" />
	<link rel="stylesheet" type="text/css" href="css/all_style.css" />
	<link rel="stylesheet" type="text/css" href="css/style3.css" />
	<link rel="stylesheet" type="text/css" href="css/fullmenu1.css" />
	<link rel="stylesheet" type="text/css" href="css/icons.css" />
	<link rel="stylesheet" type="text/css" href="css/glisse.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
 	<link rel="stylesheet" href="css/bootstrap-responsive.css">

	<link rel="stylesheet" href="css/foundation.css" />
	<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
	<script src="//use.edgefonts.net/bebas-neue:n4:all.js"></script>
	<script src="js/modernizr.custom.94927.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<!-- Add fancyBox main JS and CSS files -->
	<script type="text/javascript" src="js/jquery.fancybox.js?v=2.1.5"></script>
	<link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css?v=2.1.5" media="screen" />

	<script type="text/javascript" src="js/glisse.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		$(".fancybox").fancybox();
	});
	function cargallery(id){
		console.log(id);
	};
</script>
	
</head>
<body ng-controller="homeController">
	<!-- Top Navigation -->
	<header role="top">
		<div class="content">
			<figure class="logo"><a href="index.php"><img src="images/logo_mf_sfinal.png"/></a></figure>
			<nav class="menu">
				<ul>
					<li><a id="trigger-overlay">My work</a></li>
					<li><a href="aboutme.php">About me</a></li>
					<li><a href="events.php">Events</a></li>
					<!--<li><a href="">My Blog</a></li>-->
					<li><a class="md-trigger" data-modal="modal-1">Contact me</a></li>
				</ul>
			</nav>
		</div>
	</header>
	 <section role="content" class="contenido" >
	 	<div class="content">