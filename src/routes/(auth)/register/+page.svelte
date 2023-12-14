<script>
	import TextInput from '../../../components/utilities/TextInput.svelte';
	import Form from '../../../components/utilities/Form.svelte';
	import SubmitInput from '../../../components/utilities/SubmitInput.svelte';
	import SelectInput from '../../../components/utilities/SelectInput.svelte';
	import { api } from '../../../services/api';
	import { goto } from '$app/navigation';
	import Link from '../../../components/utilities/Link.svelte';
	import Container from '../../../components/utilities/Container.svelte';

	export let data;

	let firstName = '';
	let lastName = '';
	let email = '';
	let nationalId = '';
	let password = '';
	let confirmPassword = '';
	let nationalityId = 0;
	let specialityId = 0;
	let roleId = 0;
	let hospitalId = 0;

	async function handleSubmit() {
		if (
			firstName &&
			lastName &&
			email &&
			nationalId &&
			password &&
			confirmPassword &&
			nationalityId &&
			specialityId &&
			roleId &&
			hospitalId
		) {
			if (password === confirmPassword) {
				const response = await api.register({
					firstname: firstName,
					lastname: lastName,
					email: email,
					national_identity: nationalId,
					password: password,
					nationality_id: nationalityId,
					speciality_id: specialityId,
					role_id: roleId,
					hospital_id: hospitalId
				});

				if (response.success) {
					goto('/login');
					console.log('User registered successfully.');
				} else {
					console.log('User registration failed.');
				}
			} else {
				console.log('Passwords do not match.');
			}
		} else {
			console.log('Not all fields are filled.');
		}
	}
</script>

<Container heading="Register">
	<Form onSubmit={handleSubmit}>
		<TextInput
			label="First Name"
			placeholder="Enter your first name"
			id="firstname"
			type="text"
			bind:value={firstName}
		/>
		<TextInput
			label="Last Name"
			placeholder="Enter your last name"
			id="lastname"
			type="text"
			bind:value={lastName}
		/>
		<TextInput
			label="Email"
			placeholder="Enter your email"
			id="email"
			type="email"
			bind:value={email}
		/>
		<TextInput
			label="National ID"
			placeholder="Enter your National ID Number"
			id="national-id"
			type="text"
			bind:value={nationalId}
		/>
		<TextInput
			label="Password"
			type="password"
			placeholder="Create a password"
			id="password"
			bind:value={password}
		/>
		<TextInput
			label="Confirm Password"
			type="password"
			placeholder="Confirm your password"
			id="confirm-password"
			bind:value={confirmPassword}
		/>
		<SelectInput
			label="Nationality"
			options={data.nationalities}
			bind:selectedOption={nationalityId}
		/>
		<SelectInput
			label="Speciality"
			options={data.specialities}
			bind:selectedOption={specialityId}
		/>
		<SelectInput label="Role" options={data.roles} bind:selectedOption={roleId} />
		<SelectInput label="Hospital" options={data.hospitals} bind:selectedOption={hospitalId} />
		<SubmitInput value="Sign up" />
		<Link to="/login">Log in instead →</Link>
	</Form>
</Container>
