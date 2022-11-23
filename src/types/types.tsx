export interface IJobDetail {
	address: string;
	benefits: string[];
	createdAt: string;
	description: string;
	email: string;
	employment_type: string[];
	id: string;
	location: { lat: number; long: number };
	name: string;
	phone: string;
	pictures: string[];
	salary: string;
	title: string;
	updatedAt: string;
}

export interface JobListProps {
	list: IJobDetail[];
}

export interface JobItemProps {
	id: IJobDetail['id'];
	pictures: IJobDetail['pictures'];
	title: IJobDetail['title'];
	name: IJobDetail['name'];
	address: IJobDetail['address'];
	updatedAt: IJobDetail['updatedAt'];
}

export interface JobDetailProps extends JobItemProps {
	benefits: IJobDetail['benefits'];
	description: IJobDetail['description'];
	email: IJobDetail['email'];
	employment_type: IJobDetail['employment_type'];
	location: IJobDetail['location'];
	phone: IJobDetail['phone'];
	salary: IJobDetail['salary'];
}
