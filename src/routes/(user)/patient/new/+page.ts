import { api } from '../../../../services/api';

export async function load() {
	return await api.getInsurancePlans();
}
