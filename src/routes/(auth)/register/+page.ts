import { api } from '../../../services/api';

export async function load() {
	try {
		function createOptions(data: { name: string; id: number }[]): Option[] {
			return data.map((dataPoint) => ({ label: dataPoint.name, value: dataPoint.id }));
		}

		const [{ nationalities }, { specialities }, { roles }, { hospitals }] = await Promise.all([
			api.getNationalities(),
			api.getSpecialities(),
			api.getRoles(),
			api.getHospitals()
		]);

		return {
			nationalities: createOptions(nationalities),
			specialities: createOptions(specialities),
			roles: createOptions(roles),
			hospitals: createOptions(hospitals)
		};
	} catch (error) {
		console.log(error);
	}
}
