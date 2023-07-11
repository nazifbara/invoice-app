import type { icons } from '$lib/utils/constants';

export type IconName = keyof typeof icons;
export type InvoiceFormType = 'new' | 'edit';
export type InvoiceStatus = 'paid' | 'pending' | 'draft';

export interface InvoiceFormState {
	opened: boolean;
	type: InvoiceFormType;
}

export interface Invoice {
	id: string;
	createdAt: string;
	paymentDue: string;
	description: string;
	paymentTerms: number;
	clientName: string;
	clientEmail: string;
	status: InvoiceStatus;
	senderAddress: InvoiceAddress;
	clientAddress: InvoiceAddress;
	items: InvoiceItem[];
}

export type InvoiceAddress = {
	street: string;
	city: string;
	postCode: string;
	country: string;
};

export type InvoiceItem = {
	name: string;
	quantity: number;
	price: number;
};
