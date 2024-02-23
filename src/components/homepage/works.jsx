import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./camelot-it-lab-logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Camelot IT Lab</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jan-2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./persistent-systems-logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Persistent Systems</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">June-2021 - Jan-2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
