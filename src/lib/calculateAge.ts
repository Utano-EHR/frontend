export function calculateAge(dateOfBirth: string) {
	// @ts-ignore
	const ageInMilliseconds = new Date(dateOfBirth) - new Date();

	const age = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);

	return age;
}
