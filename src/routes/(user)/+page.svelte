<script>
	import Container from '../../components/utilities/Container.svelte';
	import SearchForm from '../../components/SearchForm.svelte';
	import { onMount } from 'svelte';
	import { api } from '../../services/api';
	import { formatDate } from '$lib/formatDate';

	let userRoleId = NaN;
	/**
	 * @type {string | any[]}
	 */
	let appointments = [];

	onMount(async () => {
		userRoleId = Number(localStorage.getItem('userRoleId'));

		// User is a doctor
		if (userRoleId === 1) {
			let userId = Number(localStorage.getItem('userId'));
			// Get appointments for the doctor
			appointments = (await api.getAppointmentsForDoctor(Number(userId))).appointments;
			console.log(appointments);
		}
	});
</script>

<div class="row">
	<Container heading="Upcoming Appointments">
		{#if appointments.length === 0}
			<p>You have no upcoming appointments.</p>
		{:else}
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Patient</th>
					</tr>
				</thead>
				<tbody>
					{#each appointments as { date, patient: { firstname, lastname } }}
						<tr>
							<td>{formatDate(date)}</td>
							<td>{firstname + ' ' + lastname}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</Container>
	<Container heading="View Patient">
		<SearchForm />
	</Container>
</div>

<style>
	.row {
		width: 100%;
		max-width: 1200px;
		margin: auto;
		display: grid;
		grid-template-columns: 10fr 2fr;
		gap: 30px;
	}

	table {
		width: 100%;
		text-align: center;
	}

	thead {
		background-color: #272727;
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
