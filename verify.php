<?php


// recursivly gets all files
function grab_directory_tree($path, $scanPath) {
    $files = array();
    $scanedFiles = scandir($path);
    foreach ($scanedFiles as $file) { 
        if ($file == "." || $file == "..") {// is either parent or current directory
            continue; // skip
        }
        if (is_dir(join_paths($path, $file))) { // is directory
            $files[$file] = grab_directory_tree(join_paths($path, $file), join_paths($scanPath, $file)); // get the dirs content
        } else { // is file
            $split = explode(".", join_paths($path, $file));
            $ext = end($split);
                
            if ($ext == "html" || $ext == "php") {
                $files[$file] = join_paths($scanPath, $file);
            }
        }
    }

    return $files;
}

// base file path should not end in a / and add should not contain any at all
function join_paths($base, $add) {
    return $base . "/" . $add;
}



$webFiles = grab_directory_tree(__DIR__, "");

$file = "ovningar\ovning1\index.html";
$url = "https://validator.w3.org/nu/?doc=";


?>

<body>
    <p id="result"></p>

    <script>
        let result = document.getElementById("result")

        function req(location) {
            let url = "<?php echo $url?>" + encodeURIComponent("https://labb.vgy.se/~viggosg/"+location)
            return url
        }
        
        let locations = [
            <?php
                print('"' .$file. '",');    
            ?>
        ]

        result.innerHTML = req(locations[0])
    </script>
</body>