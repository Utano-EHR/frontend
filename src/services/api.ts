import { browser } from '$app/environment';

type LoginDetails = {
	email: string;
	password: string;
};

type RegistrationDetails = {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	speciality_id: number;
	role_id: number;
	national_identity: string;
	hospital_id: number;
	nationality_id: number;
};

type PatientDetails = {
	firstname: string;
	lastname: string;
	email: string;
	date_of_birth: string;
	national_id: string;
	insurance_id: number;
};

type ConsultationDetails = {
	hospital_id: number;
	doctor_id: number;
	patient_id: number;
	observations: string;
};

type AppointmentDetails = {
	doctor_id: number;
	patient_id: number;
	date: string;
};

class API {
	private baseUrl: string;
	private authorisationToken: string;

	constructor() {
		this.authorisationToken = browser ? (window.localStorage.getItem('token') as string) : '';
		this.baseUrl = 'https://utano-backend-dev.onrender.com/api';
	}

	private async unauthenticatedFetch(
		endpoint: string,
		method?: string,
		body?: object,
		headers?: Record<string, string>
	) {
		const fetchOptions: RequestInit = {
			method: method ? method : 'GET',
			headers: headers ? headers : {}
		};

		if (body) {
			// @ts-ignore
			fetchOptions.headers['Content-Type'] = 'application/json';
			fetchOptions.body = JSON.stringify(body);
		}

		const response = await fetch(this.baseUrl + endpoint, fetchOptions);

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return data.data;
		} else {
			console.log(response);
			throw new Error(response.statusText);
		}
	}

	private async authenticatedFetch(
		endpoint: string,
		method?: string,
		body?: object,
		headers?: Record<string, string>
	) {
		const fetchOptions: RequestInit = {
			method: method ? method : 'GET',
			headers: headers ? headers : {}
		};

		if (body) {
			// @ts-ignore
			fetchOptions.headers['Content-Type'] = 'application/json';
			fetchOptions.body = JSON.stringify(body);
		}

		// @ts-ignore
		fetchOptions.headers['X-Auth-Token'] = this.authorisationToken;

		const response = await fetch(this.baseUrl + endpoint, fetchOptions);

		if (response.ok) {
			return (await response.json()).data;
		} else {
			const data = await response.json();
			console.log(data);
			throw new Error(response.statusText);
		}
	}

	login(loginDetails: LoginDetails) {
		return this.unauthenticatedFetch('/auth/login', 'POST', loginDetails);
	}

	register(registrationDetails: RegistrationDetails) {
		return this.unauthenticatedFetch('/auth/register', 'POST', registrationDetails);
	}

	getNationalities() {
		return this.unauthenticatedFetch('/fetcher/nationalities', 'GET');
	}

	getSpecialities() {
		return this.unauthenticatedFetch('/speciality', 'GET');
	}

	getRoles() {
		return this.unauthenticatedFetch('/fetcher/roles', 'GET');
	}

	getHospitals() {
		return this.unauthenticatedFetch('/hospital', 'GET');
	}

	getPatients() {
		return this.authenticatedFetch('/patient', 'GET');
	}

	getPatient(id: number) {
		return this.authenticatedFetch(`/patient/${id}`, 'GET');
	}

	createNewPatient(patientDetails: PatientDetails) {
		return this.authenticatedFetch('/patient/register', 'POST', patientDetails);
	}

	getDoctors() {
		return this.authenticatedFetch('/doctor', 'GET');
	}

	getDoctor(id: number) {
		return this.authenticatedFetch(`/doctor/${id}`, 'GET');
	}

	getInsurancePlans() {
		return this.authenticatedFetch('/insurance', 'GET');
	}

	getAppointmentsForDoctor(id: number) {
		return this.authenticatedFetch(`/appointment?doctor=${id}`, 'GET');
	}

	createConsultation(consultationDetails: ConsultationDetails) {
		return this.authenticatedFetch('/consultation', 'POST', consultationDetails);
	}

	createAppointment(appointmentDetails: AppointmentDetails) {
		return this.authenticatedFetch('/appointment', 'POST', appointmentDetails);
	}
}

export const api = new API();
