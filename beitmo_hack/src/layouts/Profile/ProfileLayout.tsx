import React from "react";
import {LayoutType} from "../types";

const ProfileLayout = (props: LayoutType) => {
	const { children } = props;
	return (
		<div>
            Редактирование профиля
			{children}
		</div>
	);
};

export default ProfileLayout;
