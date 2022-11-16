import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
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
				<Router basename="/aleannlab_test_task">
					<Routes>
						<Route path="/" element={<Navigate to="jobs" />} />
						<Route path="/jobs" element={<JobList list={list} />} />
						<Route path="/DetailedJob/:id" element={<DetailedJob list={list} />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			) : (
				<Preloader />
			)}
		</>
	);
}

export default App;
