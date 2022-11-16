import React from 'react';
import ArrowButton from './../../images/left-arrow-button.svg';

export const ButtonReturn = () => {
	return (
		<>
			<button className="button_return" type="button">
				<img src={ArrowButton} alt="Left Arrow" />
				<h6 className="ml-[19px] mt-[2px]">Return to job board</h6>
			</button>
		</>
	);
};
