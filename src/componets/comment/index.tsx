import React from 'react';
import "./style.scss";

export const Comments = () => {
	return (
		<div id="commentBox">
            <div className="userInfo">
                <div className="userPhoto">
                    <div className="image"></div>
                </div>
                <div className="userData">
                    <h3>Ronald Junger</h3>
                    <p><span>Service requested:</span> Pinter</p>
                </div>
            </div>
            <div className="commentInfo">
                <div className="userComment">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="commentDate">
                    <p>September 15th, 2023</p>
                </div>
            </div>
		</div>
	)
}