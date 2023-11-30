<script>
	import '../../app.css';
</script>

<main>
	<div class="content">
		<img src="/logo-full.svg" alt="Utano Logo" />
		<slot />
	</div>
</main>

<style>
	main {
		height: 100%;
		background-color: #00bfbf;
		padding: 50px;
	}
	.content {
		width: 500px;
		background-color: rgb(255, 255, 255);
		padding: 40px;
		margin: auto;
		border: 1px solid rgb(230, 230, 230);
		border-radius: 10px;
	}

	img {
		width: 30%;
	}
</style>
