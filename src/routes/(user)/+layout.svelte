<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../../app.css';

	let userName = '';
	let hospitalName = '';

	onMount(() => {
		const firstName = window.localStorage.getItem('firstName') || '';
		const lastName = window.localStorage.getItem('lastName') || '';
		const hospital = window.localStorage.getItem('hospitalName') || '';
		const accessToken = window.localStorage.getItem('accessToken') || '';

		if (firstName && lastName && hospital && accessToken) {
			userName = firstName + ' ' + lastName;
			hospitalName = hospital;
		} else {
			goto('/login');
		}
	});
</script>

<header>
	<a href="/" class="logo">
		<img src="/logo-full.svg" alt="Utano Logo" />
	</a>
	<div class="profile">
		<div class="profile-picture"></div>
		<div class="profile-information">
			<p>{userName}</p>
			<p>{hospitalName}</p>
		</div>
	</div>
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 0px 40px;
		height: 70px;
		align-items: center;
	}

	.logo,
	.logo img {
		height: 30px;
	}

	main {
		height: fit-content;
		min-height: calc(100% - 70px);
		background-color: rgb(241, 241, 241);
		padding: 20px;
	}

	.profile {
		display: flex;
		gap: 5px;
		align-items: center;
	}

	.profile-picture {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: black;
	}

	.profile-information {
		font-size: 0.8rem;
	}
</style>
