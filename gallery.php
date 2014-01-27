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
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/responsive_gallery.css">
		<script>
			var addthis_config = {
				services_overlay:'facebook,twitter,email,more'
			}
		</script>
		<script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=xa-52e563456d6f3bdf"></script>
        <script> var addthis_share = {templates: { twitter: 'Lucas is a Meme {{url}} #lucasisameme',}};</script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <!-- Lucas starts here -->
        <div class="container">
        <button class="back-button">
            <a href="index.html">Back</a>
        </button>
             
        <ul class="gallery-list">
            <?php
				if ($handle = opendir('saved')) {
					
					while (false !== ($entry = readdir($handle))) {
						$page = str_replace('.png','', $entry);
						if($entry != '.' && $entry != '..'){
							echo "<li><img class='addthis_shareable' src='saved/$entry' addthis:url='http://lucasisame.me/meme.php?page=$page' alt='meme' /></li>";
						}
					}
		
					closedir($handle);
				}
				else{
					echo '<p>Could not find any images.</p>';
				}
			?>
        </ul>

        <button class="back-button">
            <a href="index.html">Back</a>
        </button>

        <footer>
                <a href="www.venmo.com"><img  src="images/venmo_logo.png"></a>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    </body>
</html>
