window.addEventListener('scroll', function (e) {
	let pageYOffset = window.pageYOffset;
	updateHeader(pageYOffset);
	updateCategory(pageYOffset);
});

function updateHeader(pageYOffset) {
	let headerElement = document.getElementById('headerContainer').parentElement;
	let registerElement = document.getElementById('register');
	let brandPointElement = document.getElementById('brandPoint');
	if (pageYOffset == 0) {
		headerElement.className = 'headerNormal';
		registerElement.className = 'headerButton registerNormal';
		brandPointElement.className = 'brandPointNormal';
	} else {
		headerElement.className = 'headerAfterScroll';
		registerElement.className = 'headerButton registerAfterScroll';
		brandPointElement.className = 'brandPointAfterScroll';
	}
}

function updateCategory(pageYOffset) {
	let categoryElement = document.getElementById('categoryContainer');

	if (pageYOffset < 225) {
		categoryElement.className = 'categoryContainerHidden';
	} else {
		categoryElement.className = 'categoryContainerAfterScroll';
	}
}
