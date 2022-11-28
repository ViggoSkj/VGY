<?php

$files = scandir(__DIR__)



// recursivly gets all files
function grab_directory_tree($path) {
    $scanedFiles = scandir($path)
    for ($file in $scanedFiles) { 
        if ($file == "." || $file == "..") {// is either parent or current directory
            continue // skip
        }
        if (is_dir()) { // is directory
            $scanedFiles[$file] = grab_directory_tree(join_paths($path, $file) // get the dirs content
        } else { // is file
            $scanedFiles[$file] = join_paths($path, $file)
        }
    }

    return $scanedFiles
}

// base file path should not end in a / and add should not contain any at all
function join_paths($base, $add) {
    return $base + "/" + $add
}