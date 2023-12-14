<script>
	import Details from './utilities/Details.svelte';
	import { formatDate } from '../lib/formatDate';

	export let firstName = '';
	export let lastName = '';
	export let email = '';
	export let dateOfBirth = '';
	export let insuranceName = '';
	export let nationalId = '';
	/**
	 * @type {string[]}
	 */
	export let allergies = [];
	/**
	 * @type {string[]}
	 */
	export let chronicConditions = [];
</script>

<Details
	title="General Information"
	primaryAction={{ text: 'Edit Patient Information', action: () => {} }}
>
	<table>
		<tr>
			<td>First Name:</td>
			<td>{firstName}</td>
		</tr>
		<tr>
			<td>Last Name:</td>
			<td>{lastName}</td>
		</tr>
		<tr>
			<td>Email:</td>
			<td>{email}</td>
		</tr>
		<tr>
			<td>Date of Birth:</td>
			<td>{formatDate(dateOfBirth)}</td>
		</tr>
		<tr>
			<td>Insurance:</td>
			<td>{insuranceName}</td>
		</tr>
		<tr>
			<td>National ID:</td>
			<td>{nationalId}</td>
		</tr>
		<tr>
			<td>Allergies: </td>
			<td>{allergies.join(', ') || 'No allergies'}</td>
		</tr>
		<tr>
			<td>Chronic Conditions: </td>
			<td>{chronicConditions.join(', ') || 'No Chronic Conditions'}</td>
		</tr>
	</table>
</Details>
