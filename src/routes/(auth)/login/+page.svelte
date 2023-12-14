<script>
	import SubmitInput from '../../../components/utilities/SubmitInput.svelte';
	import TextInput from '../../../components/utilities/TextInput.svelte';
	import Form from '../../../components/utilities/Form.svelte';
	import { api } from '../../../services/api';
	import { goto } from '$app/navigation';
	import Link from '../../../components/utilities/Link.svelte';
	import Container from '../../../components/utilities/Container.svelte';

	let email = '';
	let password = '';

	async function handleSubmit() {
		const response = await api.login({ email, password });

		console.log(response);

		// Store user information
		window.localStorage.setItem('firstName', response.user.firstname);
		window.localStorage.setItem('lastName', response.user.lastname);
		window.localStorage.setItem('hospitalId', response.user.hospital.id);
		window.localStorage.setItem('hospitalName', response.user.hospital.name);
		window.localStorage.setItem('accessToken', response.access_token);
		window.localStorage.setItem('userRoleId', response.user.role_id);
		window.localStorage.setItem('userId', response.user.id);

		// Redirect to login page
		goto('/');
	}
</script>

<Container heading="Log in">
	<Form onSubmit={handleSubmit}>
		<TextInput
			label="Email"
			placeholder="Enter your email"
			id="email"
			type="email"
			bind:value={email}
		/>
		<TextInput
			label="Password"
			placeholder="Enter your password"
			id="password"
			type="password"
			bind:value={password}
		/>
		<SubmitInput value="Log in" />
		<div class="forgot-password">
			<Link to="/forgot">Forgot Password →</Link>
			<Link to="/register">Register →</Link>
		</div>
	</Form>
</Container>

<style>
	.forgot-password {
		display: flex;
		justify-content: space-between;
	}
</style>
