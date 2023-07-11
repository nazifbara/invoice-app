import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import type { Invoice, InvoiceItem } from './types';
dayjs.extend(localizedFormat);

const dollarUSLocale = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

export const formatPrice = (price: number) => dollarUSLocale.format(price);

export const formatDate = (date: string) => dayjs(date).format('ll');

export const getInvoiceTotal = (invoice: Invoice) => {
	return invoice.items.reduce((prev, current) => {
		return prev + getInvoiceItemTotal(current);
	}, 0);
};

export const getInvoiceItemTotal = (item: InvoiceItem) => item.price * item.quantity;
