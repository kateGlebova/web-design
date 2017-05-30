$(document).ready(function() {
	
	function refresh() {
		$.ajax({
			type: "GET",
			url: "scripts/data.xml",
			dataType: "xml",
			success: function(xml) {
				var files_list = '';
				var files_modals = '';
				$(xml).find('file').each(function(index) {
					var name = $(this).find('name').text();
					var content = $(this).find('content').text();
					files_list += "<tr><td data-toggle='modal' data-target='#modal" + index +"'>" + name + "</td><td><span class='glyphicon glyphicon-edit edit'></span> <span class='glyphicon glyphicon-trash delete'></span></td></tr>";
					files_modals += "<div class='modal fade' tabindex='-1' role='dialog' id='modal" + index + "'><div class='modal-dialog' role='document'> <div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>" + name + "</h4> </div><div class='modal-body'><p>" + content + "</p></div></div></div></div>";
				})
				$('tbody').html(files_list);
				$('#modals').html(files_modals);

		
				if (files_list) {
					$('#error').html('');
				}
				else {
					$('#error').html("<div class='panel panel-danger' id='message-no-files'><div class='panel-heading'><span class='glyphicon glyphicon-exclamation-sign'></span> No files found!</div></div>");
				}
					}
		})
	}

	refresh();

	$('#edit-form').on('submit', function(event) {
		event.preventDefault();
		$.post('scripts/form.php', $(this).serialize(), refresh);
	})

	$(document).on('click', '.edit', function() {
		var file_name = $(this).parent().parent().find('td:first').text();
		$.ajax({
			type: "GET",
			url: "scripts/data.xml",
			dataType: "xml",
			success: function(xml) {
				$(xml).find('file').each(function(index) {
					var name = $(this).find('name').text();
					if (name == file_name) {
						$('#form-name').val(name);
						$('#form-content').val($(this).find('content').text());
					}
				})
			}
		})
	})

	$(document).on('click', '.delete', function() {
		var name = $(this).parent().parent().find('td:first').text();
		$.post('scripts/delete.php', { file_name: name}, refresh);
	})
});