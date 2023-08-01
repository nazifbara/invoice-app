import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import type { Invoice, InvoiceFormData, InvoiceItem, InvoiceStatus } from './types';
import { browser } from '$app/environment';

dayjs.extend(localizedFormat);

const dollarUSLocale = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

export const generateID = () => {
	let id = '';
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

	for (let index = 0; index < 2; index++) {
		id = id + alphabets[Math.floor(Math.random() * 13)];
	}

	for (let index = 0; index < 4; index++) {
		id = id + Math.floor(Math.random() * 10);
	}

	return id;
};

export const makeInvoice = (data: InvoiceFormData, status: InvoiceStatus = 'pending'): Invoice => ({
	...data,
	createdAt: new Date().toUTCString(),
	id: generateID(),
	status
});

export const updateInvoice = (
	id: string,
	invoices: Invoice[],
	f: (currentData: Invoice) => Invoice
) => {
	const idx = findInvoiceIndex(id, invoices);
	const newData = f(invoices[idx]);
	const newInvoices = [...invoices.slice(0, idx), newData, ...invoices.slice(idx + 1)];
	setItemToLS('invoices', JSON.stringify(newInvoices));
	return newInvoices;
};

export const findInvoiceIndex = (id: string, invoices: Invoice[]) =>
	invoices.findIndex((invoice) => invoice.id === id);

export const formatPrice = (price: number) => dollarUSLocale.format(price);

export const formatDate = (date: string) => dayjs(date).format('ll');

export const getDueDate = (invoiceDate: Date, paymentTerms: number) =>
	dayjs(invoiceDate).add(paymentTerms, 'day').format('YYYY-MM-DD');

export const getInvoiceTotal = (invoice: Invoice) => {
	return invoice.items.reduce((prev, current) => {
		return prev + getInvoiceItemTotal(current);
	}, 0);
};

export const getInvoiceItemTotal = (item: InvoiceItem) => item.price * item.quantity;

export const getItemFromLS = (key: string) => {
	if (browser) {
		return localStorage.getItem(key);
	}
	return null;
};

export const setItemToLS = (key: string, value: string) => {
	if (browser) {
		localStorage.setItem(key, value);
	}
};
