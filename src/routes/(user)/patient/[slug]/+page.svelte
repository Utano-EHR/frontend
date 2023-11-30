<script>
	import Details from '../../../../components/Details.svelte';
</script>

<div class="content">
	<div class="highlight">
		<div class="row">
			<h1>Mr John Doe</h1>
			<div class="status"><p>40 years (alive)</p></div>
		</div>
		<div class="row">
			<div class="stat">
				<img src="/height-icon.svg" alt="" />
				<span>180 cm</span>
			</div>
			<div class="stat">
				<img src="/weight-icon.svg" alt="" />
				<span>75 kg</span>
			</div>
			<div class="stat">
				<img src="/blood-type-icon.svg" alt="" />
				<span>A</span>
			</div>
		</div>
	</div>

	<Details title="Biographical Information">
		<h1>This inside the Details</h1>
	</Details>
	<Details title="Observations"></Details>
	<Details title="Chronic Conditions"></Details>
	<Details title="Allergies"></Details>
</div>

<div class="sections"></div>

<style>
	.content {
		width: 800px;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.highlight {
		display: flex;
		flex-direction: column;
		gap: 70px;
		background-color: #272727;
		border-radius: 20px;
		padding: 40px;
		color: white;
	}

	.row {
		display: flex;
		justify-content: space-between;
	}

	.stat {
		display: flex;
		align-items: center;
	}

	h1 {
		font-weight: 400;
	}
</style>
