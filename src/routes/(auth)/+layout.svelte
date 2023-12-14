<script>
	import '../../app.css';
</script>

<main>
	<div class="content">
		<slot />
	</div>
</main>

<style>
	main {
		height: fit-content;
		min-height: 100%;
		background-color: #00bfbf;
		padding: 50px;
	}

	.content {
		width: 500px;
		margin: auto;
		border-radius: 10px;
	}
</style>
