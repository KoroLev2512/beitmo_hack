import React from "react";
import ProfileLayout from "../../../layouts/Profile/ProfileLayout";
import {useUserStore} from "../../../lib/store/userStore";
import {Profile} from "../../../layouts/Profile/Profile";

const ProfilePage = () => {
	const [user] = useUserStore(state => [state.user]);


	return (
		<ProfileLayout>
			{/*<Link href="/app/profile/edit">*/}
			{/*	<PrimaryButton>*/}
			{/*        редактировать*/}
			{/*	</PrimaryButton>*/}
			{/*</Link>*/}
			<Profile user={user}/>
		</ProfileLayout>
	);
};

export default ProfilePage;
