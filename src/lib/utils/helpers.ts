import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

const dollarUSLocale = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

export const formatPrice = (price: number) => dollarUSLocale.format(price);

export const formatDate = (date: string) => dayjs(date).format('ll');
