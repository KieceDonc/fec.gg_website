window.addEventListener('scroll', function (e) {
	updateHeader(window.pageYOffset);
});

function updateHeader(pageYOffset) {
	let headerElement = document.getElementById('headerContainer').parentElement;

	if (pageYOffset == 0) {
		headerElement.className = 'headerNormal';
	} else {
		headerElement.className = 'headerAfterScroll';
	}
}
