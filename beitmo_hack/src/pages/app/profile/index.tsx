import React from "react";
import ProfileLayout from "../../../layouts/Profile/ProfileLayout";
import {useUserStore} from "../../../lib/store/userStore";
import {ProfileMain} from "../../../layouts/Profile/Main/ProfileMain";

const ProfilePage = () => {
	const [user] = useUserStore(state => [state.user]);


	return (
		<ProfileLayout>
			<ProfileMain user={user}/>
		</ProfileLayout>
	);
};

export default ProfilePage;
