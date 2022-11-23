import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

import { getJobList } from './Api/api';
import { JobList } from './Components/JobList/JobList';
import { DetailedJob } from './Components/DetailedJob/DetailedJob';
// import { arrOfData } from './mok/zapaska'; //MOK DATA
import { Preloader } from './pages/Preloader';
import { IJobDetail } from './types/types';

function App() {
	const [list, setList] = useState<IJobDetail[]>([]); // CHANGE WHEN API BACK TO LIFE
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getJobList()
			.then((data) => {
				console.log(data);
				setList(data);
				setLoading(true);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			{loading ? (
				<Routes>
					<Route path="/" element={<JobList list={list} />} />
					<Route path="/jobs" element={<JobList list={list} />} />
					<Route path="/DetailedJob/:id" element={<DetailedJob list={list} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			) : (
				<Preloader />
			)}
		</>
	);
}

export default App;
