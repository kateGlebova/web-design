<?php

$files = simplexml_load_file('data.xml');

$name = $_POST['form-name'];
$content = $_POST['form-content'];

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
	$files->file[$i]->content = $content;
}
else {
	$file = $files->addChild('file');
	$file->addChild('name', $name);
	$file->addChild('content', $content);
}

file_put_contents('data.xml', $files->asXML());
