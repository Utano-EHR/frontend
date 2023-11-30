<form>
	<h1>Log In</h1>

	<div>
		<label for="email">Email</label>
		<input id="email" type="email" placeholder="Enter your email" />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" type="password" placeholder="Enter your password" />
	</div>

	<input type="submit" value="Login" />

	<div class="forgot-password">
		<a href="/forgot">Forgot Password →</a>
		<a href="/signup">Sign up →</a>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px 0px;
		color: #272727;
	}

	label {
		color: rgb(71, 71, 71);
		font-size: 13px;
	}

	h1 {
		font-size: 1.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	input {
		padding: 10px 20px;
		border: 1px solid rgb(232, 232, 232);
		border-radius: 5px;
	}

	input[type='submit'] {
		background-color: #272727;
		border: none;
		color: white;
		cursor: pointer;
	}

	.forgot-password {
		display: flex;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		color: #00bfbf;
	}
</style>
