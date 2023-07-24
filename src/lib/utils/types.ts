import type { z } from 'zod';

import type { icons } from '$lib/utils/constants';
import type { invoiceSchema } from './zod';

export type IconName = keyof typeof icons;
export type InvoiceFormType = 'new' | 'edit';
export type InvoiceStatus = 'paid' | 'pending' | 'draft';

export type InvoiceFormData = z.infer<typeof invoiceSchema>;

export interface InvoiceFormState {
	opened: boolean;
	type: InvoiceFormType;
}

export interface Invoice extends InvoiceFormData {
	id: string;
	createdAt: string;
	status: InvoiceStatus;
}

export type InvoiceItem = {
	name: string;
	quantity: number;
	price: number;
};
