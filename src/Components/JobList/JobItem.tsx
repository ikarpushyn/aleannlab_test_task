import React, { useState, FC } from 'react';
import locationIco from './../../images/locationIco.svg';
import bookmark from './../../images/bookmark.svg';
import { Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { JobItemProps } from '../../types/types';

import '../../index.css';

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#384564',
	},
	'& .MuiRating-iconHover': {
		color: '#384564',
	},
});

export const JobItem: FC<JobItemProps> = ({ id, title, pictures, name, address, updatedAt }) => {
	const [value, setValue] = useState<number | null>();

	const dynamicPicture: any = pictures.map((item) => item + `?random=${id}`);

	let posted = moment(updatedAt, 'YYYYMMDD').fromNow();

	return (
		<div className="mx-2 ">
			<div className="container_job_item">
				<div className="m-4 flex">
					<Link to={`/DetailedJob/${id}`}>
						<div className="container_job_image">
							<img src={dynamicPicture} alt="logo" />
						</div>
					</Link>

					<div className="container_star_rating">
						<div className="sm:hidden">
							<div className="mr-14 flex">
								<div>
									<StyledRating
										name="simple-controlled"
										size="small"
										value={value}
										onChange={(event, newValue: number | null) => {
											setValue(newValue);
										}}
									/>
								</div>

								<p className="ml-auto  font-light text-greyText">Posted {posted}</p>
							</div>
						</div>
						<Link to={`/DetailedJob/${id}`}>
							<h1 className="job_title ">{title}</h1>
						</Link>

						<Link to={`/DetailedJob/${id}`} className="text-greyText">
							<h2 className="mt-2 pb-2">Department name • {name}</h2>
							<span className="flex pb-2">
								<span>
									<img src={locationIco} alt="" className="mr-2" />
								</span>
								{address}
							</span>
						</Link>
					</div>

					<div className="container_star_rating_mobile">
						<div>
							<StyledRating
								name="simple-controlled"
								size="small"
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							/>
						</div>
					</div>
					<div className=" ml-auto flex flex-nowrap justify-end  max-sm:hidden ">
						<span className="mt-28 font-light text-greyText">Posted {posted} </span>
					</div>
					<i className="m-4 max-sm:hidden">
						<img src={bookmark} alt="" />
					</i>
				</div>
			</div>
		</div>
	);
};
