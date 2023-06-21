import React from "react";
import { GRAY_COLOR } from "../../ui/const/colors";
import { IconProps } from "./types";

const searchIcon = ({
	color = GRAY_COLOR,
	height = 32,
	width = 32,
}: IconProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.6186 9.11756C24.8865 12.3855 24.8865 17.6838 21.6186 20.9517C18.3507 24.2196 13.0523 24.2196 9.78443 20.9517C6.51652 17.6838 6.51652 12.3855 9.78443 9.11756C13.0523 5.84965 18.3507 5.84965 21.6186 9.11756" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M25.9999 25.3333L21.6133 20.9467" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	);
};
export default searchIcon;
