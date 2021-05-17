import React, { useState } from "react";
import "./Opinions.css";
import { OpinionsData } from "./OpinionsData";
import {
	FaArrowAltCircleRight,
	FaArrowAltCircleLeft,
} from "react-icons/fa";

import stars from "../../images/5-stars.png";

const Opinions = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
			{OpinionsData.map((client, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<div className={`opinion-${index} opinion-pt`}>
								<img src={stars} />
								<div className="client-text">{client.opinion}</div>
								<div>{client.name}</div>
							</div>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default Opinions;
