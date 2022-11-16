import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

import { getJobList } from './Api/api';
import { JobList } from './Components/JobList/JobList';
import { DetailedJob } from './Components/DetailedJob/DetailedJob';
import { arrOfData } from './mok/zapaska'; //MOK DATA
import { Preloader } from './pages/Preloader';

function App() {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true); // CHANGE WHEN API BACK TO LIFE

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
					<Route exact path="/" element={<JobList list={list} />} />
					<Route exact path="/jobs" element={<JobList list={list} />} />
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
