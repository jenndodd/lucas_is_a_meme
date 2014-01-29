<?php
        if(isset($_POST['imgData']) && $_POST['imgData'] != ''){
                $data = $_POST['imgData'];
                
                $parts = explode(',', $data);
                $data = $parts[1];
                $data = str_replace(' ', '+', $data);
                $data = base64_decode($data);
                
                $unique = microtime();
                $unique = str_replace(' ', '', $unique);
                $unique = str_replace('0.', 'meme_', $unique);
                $file = $unique.".png";
                file_put_contents('../saved/'.$file, $data);
                echo $file;
        }
        else{
                echo 'error';
        }
?>
