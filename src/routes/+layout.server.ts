import { superValidate } from 'sveltekit-superforms/server';

import { invoiceSchema } from '$lib/utils/zod';

export const load = async () => {
	const form = await superValidate(
		{
			senderStreet: 'Cotonou, Aibatin',
			senderCity: 'Cotonou',
			senderPostCode: '229',
			senderCountry: 'Benin',
			clientName: 'Nazif Barassounon',
			clientEmail: 'nazibarassounon@gmail.com',
			clientStreet: 'Cotonou, Aibatin',
			clientCity: 'Cotonou',
			clientPostCode: '229',
			clientCountry: 'Benin',
			invoiceDate: '2023-07-14',
			paymentTerms: '1',
			projectDescription: 'Hello project!',
			items: [{ name: 'allah', quantity: 3, price: 300 }]
		},
		invoiceSchema
	);

	return { form };
};
