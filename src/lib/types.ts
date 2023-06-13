import type { icons } from '$lib/utils/constants';

export type IconName = keyof typeof icons;
export type InvoiceFormType = 'new' | 'edit';

export interface InvoiceFormState {
	opened: boolean;
	type: InvoiceFormType;
}
