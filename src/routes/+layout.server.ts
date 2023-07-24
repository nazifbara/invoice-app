import { superValidate } from 'sveltekit-superforms/server';

import { invoiceSchema } from '$lib/utils/zod';

export const load = async () => {
	const form = await superValidate(
		{
			senderAddress: {
				street: 'Cotonou, Aibatin',
				city: 'Cotonou',
				postCode: '229',
				country: 'Benin'
			},
			clientName: 'Nazif Barassounon',
			clientEmail: 'nazibarassounon@gmail.com',
			clientAddress: {
				street: 'Cotonou, Aibatin',
				city: 'Cotonou',
				postCode: '229',
				country: 'Benin'
			},
			invoiceDate: '2023-07-14',
			paymentTerms: '1',
			description: 'Hello project!',
			items: [{ name: 'App mockup', quantity: 3, price: 300 }]
		},
		invoiceSchema
	);

	return { form };
};
