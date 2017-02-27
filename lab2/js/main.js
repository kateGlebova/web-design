function add_tags(tag) {
	var text_area = document.getElementById('text-edit');

	if (text_area.selectionStart < text_area.value.length - 1) {
		var start = text_area.selectionStart;
		var end = text_area.selectionEnd;
		var text = text_area.value;
		text_area.value = text.substring(0, start) + '[' + tag + ']' + text.substring(start, end) + '[/' + tag + ']' + text.substring(end, text.length);
	}
	else
		alert('Select text you want to edit!');
}

function bold() {
	add_tags('b');
};

function italic() {
	add_tags('i');
};

function underlined() {
	add_tags('u');
};

function uppercase() {
	add_tags('up');
};

function lowercase() {
	add_tags('low');
};

function color() {
	var clr = document.getElementById("color").jscolor
	add_tags("#" + clr);
};

function show() {
	var text = document.getElementById('text-edit').value;
	var regex = /\[#[a-f0-9]*?]/i;
	var match = regex.exec(text);
	while (match != null) {
		length = match[0].length
		clr = match[0].substring(1, length - 1);
		position = match.index
		text = text.substring(0, position) + '<span style="color: ' + clr + '">' + text.substring(position + length, text.length)
	    match = regex.exec(text);
	}
	text = text.replace(/\[\/.*?\]/g, '</span>');
	text = text.replace(/\[b]/g, '<span style="font-weight: bold">');
	text = text.replace(/\[i]/g, '<span style="font-style: italic">');
	text = text.replace(/\[u]/g, '<span style="text-decoration: underline">');
	text = text.replace(/\[up]/g, '<span style="text-transform: uppercase">');
	text = text.replace(/\[low]/g, '<span style="text-transform: lowercase">');
	text = text.replace(/\n/g, '<br />');
	document.getElementById('text-view').innerHTML = text;
}
