import { writable } from 'svelte/store';
import type {
	InvoiceFormState,
	InvoiceFormType,
	Invoice,
	InvoiceFormData,
	InvoiceStatus
} from './types';
import { getItemFromLS, setItemToLS, makeInvoice } from './helpers';
import { browser } from '$app/environment';

const DATA: Invoice[] = [
	{
		id: 'RT3080',
		createdAt: '2021-08-18',
		invoiceDate: '2021-08-18',
		description: 'Re-branding',
		paymentTerms: '1',
		clientName: 'Jensen Huang',
		clientEmail: 'jensenh@mail.com',
		status: 'paid',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '106 Kendell Street',
			city: 'Sharrington',
			postCode: 'NR24 5WQ',
			country: 'United Kingdom'
		},
		items: [
			{
				name: 'Brand Guidelines',
				quantity: 1,
				price: 1800.9
			}
		]
	},
	{
		id: 'XM9141',
		createdAt: '2021-08-21',
		invoiceDate: '2021-08-21',
		description: 'Graphic Design',
		paymentTerms: '30',
		clientName: 'Alex Grim',
		clientEmail: 'alexgrim@mail.com',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '84 Church Way',
			city: 'Bradford',
			postCode: 'BD1 9PB',
			country: 'United Kingdom'
		},
		items: [
			{
				name: 'Banner Design',
				quantity: 1,
				price: 156.0
			},
			{
				name: 'Email Design',
				quantity: 2,
				price: 200.0
			}
		]
	},
	{
		id: 'RG0314',
		createdAt: '2021-09-24',
		invoiceDate: '2021-09-24',
		description: 'Website Redesign',
		paymentTerms: '7',
		clientName: 'John Morrison',
		clientEmail: 'jm@myco.com',
		status: 'paid',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '79 Dover Road',
			city: 'Westhall',
			postCode: 'IP19 3PF',
			country: 'United Kingdom'
		},
		items: [
			{
				name: 'Website Redesign',
				quantity: 1,
				price: 14002.33
			}
		]
	},
	{
		id: 'RT2080',
		createdAt: '2021-10-11',
		invoiceDate: '2021-10-11',
		description: 'Logo Concept',
		paymentTerms: '1',
		clientName: 'Alysa Werner',
		clientEmail: 'alysa@email.co.uk',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '63 Warwick Road',
			city: 'Carlisle',
			postCode: 'CA20 2TG',
			country: 'United Kingdom'
		},
		items: [
			{
				name: 'Logo Sketches',
				quantity: 1,
				price: 102.04
			}
		]
	},
	{
		id: 'AA1449',
		createdAt: '2021-10-7',
		invoiceDate: '2021-10-7',
		description: 'Re-branding',
		paymentTerms: '7',
		clientName: 'Mellisa Clarke',
		clientEmail: 'mellisa.clarke@example.com',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '46 Abbey Row',
			city: 'Cambridge',
			postCode: 'CB5 6EG',
			country: 'United Kingdom'
		},
		items: [
			{
				name: 'New Logo',
				quantity: 1,
				price: 1532.33
			},
			{
				name: 'Brand Guidelines',
				quantity: 1,
				price: 2500.0
			}
		]
	},
	{
		id: 'TY9141',
		createdAt: '2021-10-01',
		invoiceDate: '2021-10-01',
		description: 'Landing Page Design',
		paymentTerms: '30',
		clientName: 'Thomas Wayne',
		clientEmail: 'thomas@dc.com',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '3964  Queens Lane',
			city: 'Gotham',
			postCode: '60457',
			country: 'United States of America'
		},
		items: [
			{
				name: 'Web Design',
				quantity: 1,
				price: 6155.91
			}
		]
	},
	{
		id: 'FV2353',
		createdAt: '2021-11-05',
		invoiceDate: '2021-11-05',
		description: 'Logo Re-design',
		paymentTerms: '7',
		clientName: 'Anita Wainwright',
		clientEmail: '',
		status: 'draft',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom'
		},
		clientAddress: {
			street: '',
			city: '',
			postCode: '',
			country: ''
		},
		items: [
			{
				name: 'Logo Re-design',
				quantity: 1,
				price: 3102.04
			}
		]
	}
];

const getInitialTheme = () => {
	const storedTheme = getItemFromLS('theme');
	if (storedTheme) {
		return storedTheme;
	}
	if (browser) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}
	return 'light';
};

export const theme = (() => {
	const { subscribe, update } = writable<string>(getInitialTheme());

	return {
		subscribe,
		toggle: () =>
			update((currentTheme) => {
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';
				setItemToLS('theme', newTheme);
				return newTheme;
			})
	};
})();

export const invoiceModal = (() => {
	const initialState: InvoiceFormState = { opened: false, type: 'new' };
	const { subscribe, update } = writable<InvoiceFormState>(initialState);

	return {
		subscribe,
		open: (type: InvoiceFormType) => update((state) => ({ ...state, type, opened: true })),
		close: () => update((state) => ({ ...state, opened: false }))
	};
})();

const getInitialInvoices = () => {
	const invoicesStr = getItemFromLS('invoices');
	if (invoicesStr) {
		return JSON.parse(invoicesStr) as Invoice[];
	}
	return null;
};

export const invoices = (() => {
	const state: Invoice[] = getInitialInvoices() ?? DATA;

	setItemToLS('invoices', JSON.stringify(state));

	const { subscribe, update } = writable<Invoice[]>(state);

	return {
		subscribe,
		save: (formData: InvoiceFormData, asDraft = false) =>
			update((invoices) => {
				const newInvoices = [makeInvoice(formData, invoices.length, asDraft ? 'draft' : 'pending')];
				setItemToLS('invoices', JSON.stringify(newInvoices));
				return newInvoices;
			}),
		edit: (id: string, formData: InvoiceFormData) =>
			update((invoices) => {
				const idx = state.findIndex((invoice) => invoice.id === id);

				const newInvoices = [
					...invoices.slice(0, idx),
					{
						...formData,
						id: invoices[idx].id,
						createdAt: invoices[idx].createdAt,
						status: 'pending' as InvoiceStatus
					},
					...invoices.slice(idx + 1)
				];
				setItemToLS('invoices', JSON.stringify(newInvoices));
				return newInvoices;
			}),
		getById: (id: string) => state.find((invoice) => invoice.id === id)
	};
})();
