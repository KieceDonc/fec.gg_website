<template>
	<Header :isInHomePage="true" />
	<div id="searchMainContainer">
		<div id="searchSecondContainer">
			<p id="searchPara">Trouver un coach <br /><b>pour vous</b> améliorer</p>

			<SearchBar />
			<div id="popularContainer">
				<p>Populaires :</p>
				<a>CS:GO</a>
				<a>Rocket League</a>
				<a>Valorant</a>
			</div>
		</div>
		<div id="searchImgContainer">
			<img id="searchImg" src="../assets/lol.jpg" alt="search background" />
		</div>
	</div>

	<div id="tmp"></div>

	<Footer />
</template>

<script>
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
import Footer from './Footer.vue';

export default {
	name: 'Homepage',
	components: {
		Header,
		SearchBar,
		Footer,
	},
};
</script>

<style scoped>
#searchMainContainer {
	height: 500px;
	background-color: #181e29;
	padding-bottom: 36px;
	padding-top: 100px;
}

#searchSecondContainer {
	position: absolute;
	top: 150px;
	left: 100px;
	z-index: 100;
}

#searchPara {
	color: white;
	font-size: 4em;
	margin-top: 0;
	margin-bottom: 40px;
}

#popularContainer {
	display: flex;
	color: white;
	font-size: 0.9em;
	margin-top: 15px;
}

#popularContainer > p {
	margin-right: 5px;
	text-decoration: underline;
	text-underline-offset: 3px;
}

#popularContainer > a {
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 10px;
	margin-right: 10px;
	border-radius: 16px;
	border: 1px solid white;
	padding-left: 7px;
	padding-right: 7px;
	padding-top: 4px;
	padding-bottom: 4px;
}

#searchImgContainer {
	height: 500px;
	background-color: rgb(56, 56, 56);
	display: flex;
	justify-content: center;
	z-index: 0;
}

#searchImg {
	filter: grayscale(0.6);
	opacity: 0.15;
	width: 100%;
	object-fit: cover;
	z-index: 50;
}

#tmp {
	height: 1000px;
}
</style>
