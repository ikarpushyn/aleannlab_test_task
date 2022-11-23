import usePagination from '../../hook/usePagination';
import React, { FC } from 'react';
import { Preloader } from '../../pages/Preloader';
import { Pagination } from './Pagination';
import { JobItem } from './JobItem';
import { JobListProps } from '../../types/types';

export const JobList: FC<JobListProps> = ({ list }) => {
	const {
		firstContentIndex,
		lastContentIndex,
		nextPage,
		prevPage,
		page,
		gaps,
		setPage,
		totalPages,
	} = usePagination({
		contentPerPage: 8,
		count: list.length,
	});

	return (
		<>
			{!list.length ? (
				<Preloader />
			) : (
				list
					.slice(firstContentIndex, lastContentIndex)
					.map((item) => (
						<JobItem
							key={item.id}
							id={item.id}
							pictures={item.pictures}
							title={item.title}
							name={item.name}
							address={item.address}
							updatedAt={item.updatedAt}
						/>
					))
			)}
			<Pagination
				nextPage={nextPage}
				prevPage={prevPage}
				page={page}
				gaps={gaps}
				setPage={setPage}
				totalPages={totalPages}
			/>
		</>
	);
};
