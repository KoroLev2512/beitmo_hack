import React from "react";
import {LayoutType} from "../../ui/types";

const ProfileLayout = (props: LayoutType) => {
	const { children } = props;
	return (
		<div>
			{children}
		</div>
	);
};

export default ProfileLayout;
