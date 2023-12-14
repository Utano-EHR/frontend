<script>
	/**
	 * @type {any[]}
	 */
	export let rows = [];
	/**
	 * @type {any[]}
	 */
	export let headings = [];
</script>

<table>
	<thead>
		<tr>
			{#each headings as heading}
				<th>{heading}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each row as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		text-align: center;
	}

	thead {
		background-color: #bebebe;
		color: white;
	}

	td,
	th {
		padding: 5px;
	}

	tr:nth-child(even) {
		background-color: #ededed;
	}
</style>
