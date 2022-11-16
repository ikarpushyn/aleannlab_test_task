/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import moment from 'moment';
import Image from '../ImagesModule/Image';
import { Description } from '../../util/Description';
import { ConvertedSalary } from '../../util/Salary';
import { Link } from 'react-router-dom';
import { Contacts } from '../Contacts/Contacts';
import { ButtonApply } from '../Button/ButtonApply';
import { ButtonReturn } from '../Button/ButtonReturn';
import bookmarkStar from '../../images/bookmark-star.svg';
import bookmark from '../../images/bookmark.svg';
import share from '../../images/share.svg';

export const DetailedJobItem = (props) => {
	const {
		id,
		name,
		email,
		phone,
		title,
		salary,
		address,
		benefits,
		location,
		pictures,
		createdAt,
		updatedAt,
		description,
		employment_type,
	} = props;
	let posted = moment(updatedAt, 'YYYYMMDD').fromNow();

	return (
		<div className="container_detailed_job">
			<div className="container_detailed_job_left_side">
				<div className="lg:flex">
					<div className="lg:flex">
						<nobr className="my-4 text-2xl font-bold lg:mr-[25%]">Job Details</nobr>
						<hr className="separator" />
					</div>

					<div className="my-5 flex gap-4 align-bottom font-normal lg:ml-[10%]">
						<span className="">
							<img src={bookmarkStar} className="lg:hidden" alt="" />
							<img src={bookmark} alt="" className="hidden lg:flex" />
						</span>
						<span>Save to my list</span>
						<span className="">
							<img src={share} alt="" />
						</span>
						<span>Share</span>
					</div>
				</div>

				<div className="hidden lg:block">
					<hr className="separator" />
				</div>

				<div className="hidden lg:flex">
					<ButtonApply />
				</div>

				<div className="lg:flex">
					<h1 className=" text-2xl font-bold tracking-tight">{title}</h1>
				</div>

				<div className="mt-2 grid grid-flow-col grid-rows-2 justify-between ">
					<span className="row-span-3 mt-4 text-xs font-light text-greyText">Posted {posted}</span>
					<p className="col-span-1 row-span-1 ml-auto ">Brutto, per year</p>
					<span className="text-xl font-bold">€ {ConvertedSalary(salary)}</span>
				</div>

				<div className="mt-2">
					<h5 className="description">{Description(description)}</h5>
				</div>

				<div className="mt-6 text-center">
					<ButtonApply />
				</div>

				<div className=" lg:order-last lg:flex lg:flex-col">
					<div className="mt-32 ">
						<h3 className="font-bold">Attached images</h3>
						<hr className="separator my-3" />
					</div>

					<div className="container_images_module">
						{pictures.map((item, index) => (
							<div
								key={index}
								className=" h-[300px] w-auto shrink-0 rounded-lg object-cover lg:h-max lg:w-auto"
							>
								<Image src={item} border={true} zoom={true}></Image>
							</div>
						))}
					</div>

					<div className=" mt-14 lg:order-first lg:flex lg:flex-col">
						<h4 className="mb-2 font-bold">Additional info</h4>
						<hr className="separator mb-4" />

						<div className="mt-2">
							<span>Employment type</span>
							<div className="mt-2 flex justify-start space-x-4">
								{employment_type.map((item) => (
									<div class="employment_type">{item}</div>
								))}
							</div>
						</div>

						<div className="mt-5">
							<span>Benefits</span>
							<div className=" mt-2 flex justify-start space-x-4">
								{benefits.map((item) => (
									<div class="benefits">{item}</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" mt-[89px] hidden lg:block">
				<Link to={`/`}>
					<ButtonReturn />
				</Link>
			</div>
			<div className=" lg:absolute  lg:top-[20%] lg:left-[55%] ">
				<Contacts name={name} address={address} phone={phone} email={email} location={location} />
			</div>
		</div>
	);
};
