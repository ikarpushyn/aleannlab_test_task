import React from 'react';
import Circle from '../../images/circle.svg';
import locationIco from '../../images/locationIco.svg';

export const Contacts = ({ name, address, phone, email, location }) => {
	return (
		<div className="container_contacts ">
			<div className="lg:hidden">
				<h1 className="mb-[10px] font-bold">Contacts</h1>
				<div className="separator" />
			</div>
			<div className="map_contacts">
				<div className="contacts_detail">
					<div className="relative max-w-[402px] rounded-t-lg  px-[62px] pt-[31px] pb-[20px] lg:absolute lg:z-10">
						<h2 className="!text-[#E7EAF0]">
							Department name.
							<br /> {name}
						</h2>
						<div className="mt-2 flex">
							<img alt="" src={locationIco} color="white" />
							<h3 className="!font-normal !text-[#E8EBF3]">{address}</h3>
						</div>
						<div className="mt-2">
							<h3 className="!font-normal !text-[#E8EBF3]">{phone},</h3>
							<h3 className="!font-normal !text-[#E8EBF3]">{email}</h3>
						</div>
					</div>
					<img className="absolute left-0 z-0 hidden lg:block" src={Circle} alt="svg" />
				</div>
				<iframe
					title="map"
					className="map"
					src={`//maps.google.com/maps?q=${location.lat},${location.long}&z=4&amp&output=embed`}
				></iframe>
			</div>
		</div>
	);
};
