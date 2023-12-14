<script>
	import { calculateAge } from '../lib/calculateAge';

	export let firstName = '';
	export let lastName = '';
	export let dateOfBirth = '';
</script>

<div class="container">
	<h1>{firstName + ' ' + lastName}</h1>
	<div class="status"><p>{calculateAge(dateOfBirth)} years old</p></div>
</div>

<style>
	.container {
		background-color: #272727;
		color: white;
		padding: 60px;
		border-radius: 10px;
	}
</style>
