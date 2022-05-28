<template>
	<div id="headerContainer" class="headerNormal">
		<div id="brandContainer">
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
	</div>
</template>

<script>
export default {
	name: 'Header',
};

window.addEventListener('scroll', function () {
	let pageYOffset = window.pageYOffset;
	updateHeader(pageYOffset);
	updateCategory(pageYOffset);
});

function updateHeader(pageYOffset) {
	let brandElement = document.getElementById('brandContainer').parentElement;
	let registerElement = document.getElementById('register');
	let brandPointElement = document.getElementById('brandPoint');
	if (pageYOffset == 0) {
		brandElement.className = 'brandContainer headerNormal';
		registerElement.className = 'headerButton registerNormal';
		brandPointElement.className = 'brandPointNormal';
	} else {
		brandElement.className = 'brandContainer headerAfterScroll';
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
#headerContainer {
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

#brandContainer {
	display: flex;
	justify-content: space-between;
}

#brand {
	display: flex;
	font-weight: bold;
	font-size: 30px;
	margin-left: 100px;
}

#brandPoint {
	font-size: 58px;
	line-height: 0.3;
}

.brandPointNormal {
	color: white;
}

.brandPointAfterScroll {
	color: #325aa5;
}

#headerMenu {
	margin-top: auto;
	margin-bottom: auto;
}

.headerButton {
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: 18px;
}

#register {
	border-radius: 4px;
	margin-right: 100px;
}

.registerNormal {
	border: 2px solid white;
}

.registerAfterScroll {
	border: 2px solid rgb(50, 90, 165);
}

#categoryContainer {
	display: flex;
	justify-content: space-evenly;
	transition: all 0.4s ease-in-out;
	color: #555555;
}

.categoryContainerHidden {
	opacity: 0;
	height: 0;
	overflow: hidden;
	margin-top: 0px;
	border: 0;
}

.categoryContainerAfterScroll {
	opacity: 1;
	height: auto;
	margin-top: 20px;
	border-top: 1px solid #cccccc;
	border-bottom: 1px solid #cccccc;
}

#categoryContainer > a {
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: auto;
	padding-right: auto;
	display: table-cell;
	width: 100%;
	text-align: center;
}

#categoryContainer > a:hover {
	text-decoration: underline;
}
</style>
