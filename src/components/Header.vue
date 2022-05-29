<template>
	<div
		id="headerContainer"
		class="brandContainer"
		v-bind:class="{
			headerBeforeScroll: isInBeforeScrollStateLvl1,
			headerNormal: !isInBeforeScrollStateLvl1,
		}"
	>
		<div id="brandContainer">
			<div id="brand">
				<div class="brandName">Fec</div>
				<div
					id="brandPoint"
					v-bind:class="{
						brandPointBeforeScroll: isInBeforeScrollStateLvl1,
						brandPointNormal: !isInBeforeScrollStateLvl1,
					}"
				>
					.
				</div>
				<div class="brandName">gg</div>
				<SearchBar id="headerSearchBar" />
			</div>
			<div id="menu">
				<a class="menuButton">Français</a>
				<a class="menuButton">Donner des cours</a>
				<a class="menuButton">Se connecter</a>
				<a
					v-bind:class="{
						registerBeforeScroll: isInBeforeScrollStateLvl1,
						registerNormal: !isInBeforeScrollStateLvl1,
					}"
					class="menuButton"
					id="register"
					>S'inscrire</a
				>
			</div>
		</div>

		<div
			v-bind:class="{
				categoryContainerBeforeScroll: isInBeforeScrollStateLvl2,
				categoryContainerNormal: !isInBeforeScrollStateLvl2,
			}"
			id="categoryContainer"
		>
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
import SearchBar from './SearchBar.vue';
export default {
	name: 'Header',
	components: { SearchBar },
	props: {
		isInHomePage: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data: function () {
		return {
			scrollPosition: 0,
			isInBeforeScrollStateLvl1: this.isInHomePage,
			isInBeforeScrollStateLvl2: this.isInHomePage,
		};
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY;
			this.isInBeforeScrollStateLvl1 =
				this.isInHomePage && this.scrollPosition == 0;
			this.isInBeforeScrollStateLvl2 =
				this.isInHomePage && this.scrollPosition < 225;
		},
	},
	mounted() {
		if (this.isInHomePage) {
			window.addEventListener('scroll', this.updateScroll);
		}
	},
	destroy() {
		if (this.isInHomePage) {
			window.removeEventListener('scroll', this.updateScroll);
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerContainer {
	padding-top: 20px;
	padding-bottom: 20px;
	position: fixed;
	width: 100%;
}

.headerBeforeScroll {
	color: white;
	transition: background-color 400ms linear;
}

.headerNormal {
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
	margin-left: 100px;
	align-items: center;
}

.brandName {
	font-size: 30px;
}

#brandPoint {
	font-size: 58px;
	display: inline-table;
	line-height: 0;
}

.brandPointBeforeScroll {
	color: white;
}

.brandPointNormal {
	color: #325aa5;
}

#headerSearchBar {
	transform: scale(0.8);
}

#menu {
	margin-top: auto;
	margin-bottom: auto;
}

.menuButton {
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

.registerBeforeScroll {
	border: 2px solid white;
}

.registerNormal {
	border: 2px solid #325aa5;
}

#categoryContainer {
	display: flex;
	justify-content: space-evenly;
	transition: all 0.4s ease-in-out;
	color: #555555;
}

.categoryContainerBeforeScroll {
	opacity: 0;
	height: 0;
	overflow: hidden;
	margin-top: 0px;
	border: 0;
}

.categoryContainerNormal {
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
