<template>
	<header class="headerNormal">
		<div id="headerContainer">
			<div id="brand">
				Fec
				<div id="brandPoint">.</div>
				gg
			</div>
			<div id="headerMenu">
				<a class="headerButton">Français</a>
				<a class="headerButton">Donner des cours</a>
				<a class="headerButton">Se connecter</a>
				<a class="headerButton registerNormal" id="register">S'inscrire</a>
			</div>
		</div>

		<div class="categoryContainerHidden" id="categoryContainer">
			<a>LoL</a>
			<a>Valorant</a>
			<a>TFT</a>
			<a>Wild Rift</a>
			<a>RL</a>
			<a>CS:GO</a>
			<a>OW</a>
			<a>SSBU</a>
			<a>Others</a>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
};

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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	padding-top: 20px;
	padding-bottom: 20px;
	position: fixed;
	width: 100%;
}

.headerNormal {
	color: white;
	transition: background-color 400ms linear;
}

.headerAfterScroll {
	background-color: #eeeeee;
	z-index: 200;
	color: black;
	transition: background-color 400ms linear;
}

#headerContainer {
	display: flex;
	justify-content: space-between;
}
</style>
