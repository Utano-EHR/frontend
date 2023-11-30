<script>
	import SearchForm from '../../components/SearchForm.svelte';
</script>

<div>
	<img src="/logo-icon.svg" alt="Utano Logo" />
	<SearchForm />
</div>

<style>
	img {
		width: 250px;
	}

	div {
		padding-top: 50px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
		justify-content: center;
	}
</style>
