import { z } from 'zod';

export const invoiceSchema = z.object({
	senderAddress: z.object({
		street: z.string().min(1),
		city: z.string().min(1),
		postCode: z.string().min(1),
		country: z.string().min(1)
	}),

	clientName: z.string().min(1),
	clientEmail: z.string().email(),
	clientAddress: z.object({
		street: z.string().min(1),
		city: z.string().min(1),
		postCode: z.string().min(1),
		country: z.string().min(1)
	}),

	invoiceDate: z.string().min(1),
	paymentTerms: z.string().min(1).max(2).default('1'),
	description: z.string().min(1),

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
