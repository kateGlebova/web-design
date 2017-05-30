<?php

$files = simplexml_load_file('data.xml');

$name = $_POST['file_name'];

$exists = False;
$i = 0;

foreach ($files->file as $file) {
	if ((string) $file->name == $name) {
	    $exists = True;
	    break;
	}
	$i += 1;
}

if ($exists) {
	unset($files->file[$i]);
}

file_put_contents('data.xml', $files->asXML());
