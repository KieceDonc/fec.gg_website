<template>
	<div id="FooterContainer">
		<h2>Fec.gg</h2>
		<table>
			<tbody>
				<tr>
					<td>
						<h3>Contact</h3>
						<p>20 Rue de la chaise</p>
						<p>Dijon, 21000</p>
						<a id="footerMailSupport" href="mailto:support@fec.gg"
							>support@fec.gg</a
						>
					</td>
					<td>
						<h3>Société</h3>

						<a>À propos de nous</a>
						<a>Nous contacter</a>
						<a>Conditions de services</a>
						<a>Politique de confidentialité</a>
					</td>
					<td>
						<h3>Compte</h3>

						<a>Profil</a>
						<a>Inviter des amis</a>
						<a>RGPD</a>
					</td>
					<td>
						<h3>S'abonner</h3>
						<input
							id="footerSubscribeInput"
							type="email"
							autocomplete="off"
							placeholder="Email"
						/>
						<button id="footerSubscribeButton">S'abonner</button>
					</td>
				</tr>
			</tbody>
		</table>

		<div id="footerCopyright">
			© Copyright {{ new Date().getFullYear() }} fec.gg
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style scoped>
#FooterContainer {
	background-color: #181e29;
	color: white;
	padding-top: 25px;
	padding-bottom: 25px;
	text-align: center;
}
h2 {
	margin: 0;
}
table {
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 25px;
}

td {
	padding-left: 50px;
	padding-right: 50px;
	vertical-align: baseline;
	display: inline-grid;
}

td > * {
	padding-left: 10px;
}

td > p {
	margin-top: 0px;
	margin-bottom: 0px;
	padding-top: 8px;
	padding-bottom: 8px;
}

td > a {
	padding-top: 8px;
	padding-bottom: 8px;
}

#footerSubscribeInput {
	border: 0;
	height: 30px;
	font-size: 0.8em;
}

#footerSubscribeInput:focus {
	outline: none;
}

#footerSubscribeButton {
	background-color: rgb(50, 90, 165);
	border: 0;
	height: 30px;
	font-size: 0.8em;
	padding-left: 25px;
	padding-right: 25px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	color: white;
}

#footerMailSupport {
	text-decoration: none;
	color: white;
}

#footerCopyright {
	margin-left: 200px;
	margin-right: 200px;
	border-top: 2px solid white;
	padding-top: 25px;
}
</style>
