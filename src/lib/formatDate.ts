export function formatDate(date: string) {
	const dateObject = new Date(date);

	const formattedDate = Intl.DateTimeFormat('en-GB', { dateStyle: 'short' }).format(dateObject);

	return formattedDate;
}
