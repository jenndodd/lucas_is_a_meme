<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Lucas is a Meme</title>
        <meta property="og:title" content="Lucas is a Meme" />
        <meta name="description" content="rowse, make, and share Lucas memes!">
        <meta property="og:description" content="Browse, make, and share Lucas memes!" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/meme.css">
        <link rel="stylesheet" type="text/css" href="css/colorbox.css">
        <script> var addthis_share = {templates: { twitter: 'Lucas is a Meme {{url}} #lucasisameme',}};</script>
    </head>
      <body>
          <!--[if lt IE 7]>
              <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
          <![endif]-->
         <!-- Lucas starts here -->
         <div class="container">
            <div class="your-meme">
			<?php
				if(isset($_GET['page']) && $_GET['page'] != ''){
					$img = $_GET['page'];
					echo '<img src="saved/'.$img.'.png" alt="Lucas is a meme">';
				}
				else{
					echo '<p>Oops! No image specified.</p>';
				}
			?>
            </div>
            <p class="instructions">Right click or tap and hold to save... or use the links below to share!</p>
            <!-- AddThis Button BEGIN -->
            <div class="addthis_toolbox addthis_default_style addthis_32x32_style add_this_strip">
              <a class="addthis_button_preferred_1"></a>
              <a class="addthis_button_preferred_2"></a>
              <a class="addthis_button_preferred_3"></a>
              <a class="addthis_button_compact"></a>
            </div>
            <!-- AddThis Button END -->
            <footer>
                <a href="www.venmo.com"><img  src="images/venmo_logo.png"></a>
            </footer>
         </div>
          <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52e56f6472994223"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"></script>')</script>
        <script src="js/vendor/jquery.colorbox-min.js"></script>
        <script src="js/script.js"></script>
      </body>
  </html>