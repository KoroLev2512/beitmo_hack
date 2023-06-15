import React from "react";
import { getSvgOptions } from "../../utils/iconHelper";
import { IconProps } from "./types";
//import styles from "./global"

const ArrowIcon = ({
	color = "#73848C",
	height = 18,
	width = 18,
	rotation = 0,
}: IconProps) => {
	const svgOptions = getSvgOptions({
		rotationDegree: rotation,
	});

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...svgOptions}
		>
			<path
				d="M1.125 12.375L9 5.625L16.875 12.375"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowIcon;
