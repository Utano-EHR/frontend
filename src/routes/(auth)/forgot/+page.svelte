<script lang="ts">
	import Form from '../../../components/utilities/Form.svelte';
	import TextInput from '../../../components/utilities/TextInput.svelte';
	import SubmitInput from '../../../components/utilities/SubmitInput.svelte';
	import Container from '../../../components/utilities/Container.svelte';
</script>

<Container heading="Reset Password">
	<Form>
		<TextInput type="email" placeholder="Enter your email" label="Email" />
		<SubmitInput value="Reset Password" />
	</Form>
</Container>
