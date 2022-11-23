import { useParams } from 'react-router-dom';
import { DetailedJobItem } from './DetailedJobItem';
import { Preloader } from '../../pages/Preloader';
import { JobListProps } from '../../types/types';
import { FC } from 'react';

export const DetailedJob: FC<JobListProps> = ({ list }) => {
	const { id } = useParams();

	const filteredArr = list.filter((el) => el.id === id);

	return (
		<>
			{!filteredArr.length ? (
				<Preloader />
			) : (
				filteredArr.map((item) => <DetailedJobItem key={item.id} {...item} />)
			)}
		</>
	);
};
