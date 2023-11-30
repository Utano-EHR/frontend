<script>
	import TextInput from '../../../components/TextInput.svelte';
	import Form from '../../../components/Form.svelte';
	import SubmitInput from '../../../components/SubmitInput.svelte';
</script>

<form>
	<Form heading="Sign up">
		<TextInput label="First Name" placeholder="Enter your first name" id="firstname" type="text" />
		<TextInput label="Last Name" placeholder="Enter your last name" id="lastname" type="text" />
		<TextInput label="Email" placeholder="Enter your email" id="email" type="email" />
		<SubmitInput value="Sign up" />
	</Form>
</form>
