import { superValidate } from 'sveltekit-superforms/server';

import { invoiceSchema } from '$lib/utils/zod';

export const load = async () => {
	const form = await superValidate(invoiceSchema);

	return { form };
};
