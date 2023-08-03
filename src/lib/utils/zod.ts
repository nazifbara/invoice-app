import { z } from 'zod';

const emptyMessageOption = {
	message: "can't be empty"
};

export const invoiceSchema = z.object({
	senderAddress: z.object({
		street: z.string().min(1, emptyMessageOption),
		city: z.string().min(1, emptyMessageOption),
		postCode: z.string().min(1, emptyMessageOption),
		country: z.string().min(1, emptyMessageOption)
	}),

	clientName: z.string().min(1, emptyMessageOption),
	clientEmail: z.string().email(),
	clientAddress: z.object({
		street: z.string().min(1, emptyMessageOption),
		city: z.string().min(1, emptyMessageOption),
		postCode: z.string().min(1, emptyMessageOption),
		country: z.string().min(1, emptyMessageOption)
	}),

	invoiceDate: z.string().min(1, emptyMessageOption),
	paymentTerms: z.string().min(1).max(2).default('1'),
	description: z.string().min(1, emptyMessageOption),

	items: z
		.array(
			z.object({
				name: z.string().min(1, emptyMessageOption),
				quantity: z.number().min(1, emptyMessageOption),
				price: z.number().min(1, emptyMessageOption)
			})
		)
		.min(1)
});
