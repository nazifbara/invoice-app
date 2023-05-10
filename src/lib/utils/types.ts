export interface Invoice {
	id: string;
	createdAt: string;
	paymentDue: string;
	description: string;
	paymentTerms: number;
	clientName: string;
	clientEmail: string;
	status: string;
	senderAddress: Address;
	clientAddress: Address;
	items: Item[];
	total: number;
}

export type Address = {
	street: string;
	city: string;
	postCode: string;
	country: string;
};
export type Item = {
	name: string;
	quantity: number;
	price: number;
	total: number;
};
