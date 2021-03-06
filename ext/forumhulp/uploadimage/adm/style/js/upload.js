; (function ($, window, document) {
	// do stuff here and use $, window and document safely
	// https://www.phpbb.com/community/viewtopic.php?p=13589106#p13589106
	$("a.simpledialog").simpleDialog({
	    opacity: 0.1,
	    width: '650px',
		closeLabel: '&times;'
	});

	$(".hoverinfo").mouseenter(function() {
			var val = $(this).data('id');
			$(".image").fadeOut();
			$("#image"+val).fadeIn();
	});
	$(".hoverinfo").mouseleave(function() {
			$(".image").fadeOut();
	});

	var clipboard = new Clipboard('.iconcopy');
	clipboard.on('success', function(e) {
		$('#clipboardmsg').text('Clipboard action: ' + e.action);
		e.clearSelection();
	});
	
	clipboard.on('error', function(e) {
		$('#clipboardmsg').text('Clipboard action: ' + e.action);
	});

	$('.unc_path').click(function (){
		var text = $(this).text();
		var $input = $('<input type=search class=test>');
		$input.css('width', '205px');
		$input.css('background-color', '#fff');
		$input.css('border', 'none');
		$input.prop('value', text);
		$input.insertAfter($(this));
		$input.focus();
		$input.select();
		$(this).hide();
	});
})(jQuery, window, document);

