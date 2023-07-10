import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { invoiceSchema } from '$lib/utils/zod';

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, invoiceSchema);
		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
};
