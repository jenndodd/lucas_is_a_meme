<?php
	$HEIGHT = 484;
	$WIDTH = 630;
	
	if(isset($_POST['imgData']) && $_POST['imgData'] != ''){
		$data = $_POST['imgData'];
		
		$parts = explode(',', $data);
		$data = $parts[1];
		$data = str_replace(' ', '+', $data);
		$data = base64_decode($data);
		
		$size = getimagesizefromstring($data);
		if($size[0] == $WIDTH && $size[1] == $HEIGHT){
			$unique = microtime();
			$unique = str_replace(' ', '', $unique);
			$unique = str_replace('0.', 'meme_', $unique);
			$file = $unique.".png";
			file_put_contents('../saved/'.$file, $data);
			echo $file;
		} else {
			echo 'error';
		}
	}
	else{
		echo 'error';
	}
?>
