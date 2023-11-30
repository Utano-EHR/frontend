<script>
	import '../../app.css';
</script>

<header>
	<div class="logo">
		<img src="/logo-full.svg" alt="Utano Logo" />
	</div>
	<div class="profile">
		<div class="profile-picture"></div>
		<div class="profile-information">
			<p>Anesu Kafesu</p>
			<p>Parirenyatwa Hospital</p>
		</div>
	</div>
</header>
<main>
	<slot />
</main>

<footer>
	<ul>
		<li>About</li>
		<li>Privacy Policy</li>
		<li>Contact Support</li>
	</ul>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 0px 40px;
		height: 70px;
		align-items: center;
	}

	.logo,
	.logo img {
		height: 30px;
	}

	main {
		height: calc(100% - 100px);
	}

	footer {
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	footer ul {
		font-size: 0.7rem;
		color: rgb(57, 57, 57);
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.profile {
		display: flex;
		gap: 5px;
		align-items: center;
	}

	.profile-picture {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: black;
	}

	.profile-information {
		font-size: 0.8rem;
	}
</style>
