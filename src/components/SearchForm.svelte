<script>
	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	async function onSubmit(e) {
		e.preventDefault();
		fetch('');
	}
</script>

<form on:submit={onSubmit}>
	<input type="text" placeholder="Patient ID" />
	<input type="submit" value="Search" />
</form>

<style>
	form {
		width: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	input[type='text'] {
		padding: 10px 15px;
		background-color: #f3f3f3;
		border: 1px solid #aeaeae;
		width: 400px;
		border-radius: 10px;
		outline: none;
		font-size: 0.9rem;
	}

	input[type='text']:focus {
		border: 1px solid orange;
	}

	input[type='submit'] {
		padding: 10px 30px;
		background-color: #272727;
		color: #f5f5f5;
		border: none;
		border-radius: 7px;
		cursor: pointer;
		font-size: 0.9rem;
	}
</style>
