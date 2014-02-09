<?php

$path_to_music = $_POST['path_to_music'];

// Get folders
$music_folders = look_in_folder($path_to_music, 'folders');
$music_files = array();
foreach ($music_folders as $folder) {
    $music_files[] = look_in_folder($folder, 'files');
}

// Format files into folder=>file
$music = array();
foreach ($music_files as $file_path) {
    foreach ($file_path as $fp) {
        $pieces = array_reverse(explode("/", $fp));
        $music[$pieces[1]][] = $pieces[0];
    }
}

function look_in_folder($folder, $find) {
    if (substr($folder, -1) != '/') {
        $folder .= "/";
    }
    if (substr($folder, -1) != '*') {
        $folder .= "*";
    }

    $item_list = array();
    foreach (glob($folder) as $item) {
        $item_list[] = $item;
    }
    return $item_list;
}

// Return music file list
echo json_encode($music);

?>