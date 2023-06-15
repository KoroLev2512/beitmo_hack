import React from "react";
import {ProfileEditPopup} from "../../../ui/Popups";
import HomeLayout from "../../../layouts/Home/HomeLayout";
import {useUserStore} from "../../../lib/store/userStore";
import {isNull} from "lodash";
import {useEventsStore} from "../../../lib/store/eventsStore";
import {useNewsStore} from "../../../lib/store/newsStore";

const ProfilePage = () => {
	const user = useUserStore(state => state.user);
	const events = useEventsStore(state => state.events);
	const news = useNewsStore(state => state.news);

	if (isNull(user)) {
		return <div>loading... or error .... huy znaet</div>;
	}
	return (
		<HomeLayout events={events} news={news} user={user}>
			<ProfileEditPopup user={user}/>
		</HomeLayout>
	);
};

export default ProfilePage;
