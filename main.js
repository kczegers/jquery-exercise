$(document).ready(function () {
	$('#btn-img-1').prop('disabled', true);
	$('.my-button').on("click", function (e) {
		e.preventDefault();
		$('.my-button').prop('disabled', false);
		$(this).prop('disabled', true);
		var myInfo = $(this),
			myUrl = myInfo.data('image');
		$('#aids-img').attr('src', myUrl);
	});
});