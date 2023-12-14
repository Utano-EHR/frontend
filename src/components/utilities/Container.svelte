<script>
	export let heading = '';
</script>

<div>
	<h1>{heading}</h1>
	<slot />
</div>

<style>
	h1 {
		font-size: 1.5rem;
		margin-bottom: 20px;
	}
	div {
		padding: 30px;
		background-color: white;
		width: 100%;
		border-radius: 10px;
		height: fit-content;
	}
</style>
