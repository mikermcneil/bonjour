

$(function whenTheDOMIsReady () {


	var $form = $('[data-form] input');

	$form.keypress(function (e) {
		if (e.keyCode === 13) {
			var chatToSend = $form.val();
			
			// TODO: lock the input, draw loading spinner
			socket.post('/remark', {
				payload: chatToSend
			}, function whenTheServerResponds () {
				// TODO: clear input hide loading spinner
				$(e.currentTarget).val('');
			});
		}
	});

});
