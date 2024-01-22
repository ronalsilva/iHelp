import React from 'react';
import "./style.scss";

export const EmployerBox = () => {
	return (
		<div className="employerBox">
			<div className="employeeImage">
				<a href="/collaborator">
					<div className="image"></div>
				</a>
			</div>
			<div className="employeeData">
				<div className="employeeTitle">
					<h2><a href="/collaborator">Ronald Junger</a></h2>
					<p className='jobOption'>Pinter - Pinter - Pinter - Pinter</p>
				</div>
				<div className="descript">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ...</p>
				</div>
				<div className="price">
					<p>$ 24,45</p>
				</div>
				<a href="" className='favorite'>favorite</a>
				<p className='evaluation'>4.5</p>
			</div>
		</div>
	)
}