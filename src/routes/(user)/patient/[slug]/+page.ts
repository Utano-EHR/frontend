import { api } from '../../../../services/api';

export async function load({ params }) {
	return await api.getPatient(Number(params.slug));
}
