<template>
	<Header />
	<div id="searchMainContainer">
		<div id="searchSecondContainer">
			<p id="searchPara">Trouver un coach <br /><b>pour vous</b> améliorer</p>

			<form id="searchForm">
				<span style="width: 16px; height: 16px">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
						></path>
					</svg>
				</span>
				<input
					type="search"
					autocomplete="off"
					placeholder="Essayez «&nbsp;League of legends&nbsp;»"
					value=""
				/>
				<button>Rechercher</button>
			</form>

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
</template>

<script>
import Header from './Header.vue';

export default {
	name: 'Homepage',
	components: {
		Header,
	},
};
</script>

<style scoped>
#headerSearch {
	padding-top: 200px;
	padding-bottom: 200px;
}

#searchMainContainer {
	height: 500px;
	background-color: rgb(24, 30, 41);
	padding-bottom: 36px;
	padding-top: 78px;
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

#searchForm {
	background-color: white;
	height: 60px;
	border-radius: 8px;
	display: table-cell;
}

#searchForm > span {
	padding-left: 6px;
}

#searchForm > input {
	border: 0;
	height: 100%;
	width: 500px;
	font-size: 1em;
	padding-left: 10px;
	padding-right: 10px;
}

#searchForm > input:focus {
	outline: none;
}

#searchForm > button {
	background-color: rgb(50, 90, 165);
	border: 0;
	height: 100%;
	font-size: 1em;
	padding-left: 25px;
	padding-right: 25px;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	color: white;
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
	border: 2px solid white;
	padding: 7px;
}

#tmp {
	height: 1000px;
}
</style>
