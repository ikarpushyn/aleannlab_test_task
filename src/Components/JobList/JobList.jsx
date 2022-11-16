import usePagination from '../../hook/usePagination';

import { JobItem } from '../JobList/JobItem';
import { Preloader } from '../../pages/Preloader';
import { Pagination } from './Pagination';

export const JobList = ({ list }) => {
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
					.map((item) => <JobItem key={item.id} {...item} />)
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
