import { z } from 'zod';

export const invoiceSchema = z.object({
	senderStreet: z.string().min(1),
	senderCity: z.string().min(1),
	senderPostCode: z.string().min(1),
	senderCountry: z.string().min(1),

	clientName: z.string().min(1),
	clientEmail: z.string().email(),
	clientStreet: z.string().min(1),
	clientCity: z.string().min(1),
	clientPostCode: z.string().min(1),
	clientCountry: z.string().min(1),

	invoiceDate: z.string().min(1),
	paymentTerms: z.string().min(1).max(2).default('1'),
	projectDescription: z.string().min(1),

	items: z
		.array(
			z.object({
				name: z.string().min(1),
				quantity: z.number().min(1),
				price: z.number().min(1)
			})
		)
		.min(1)
});
