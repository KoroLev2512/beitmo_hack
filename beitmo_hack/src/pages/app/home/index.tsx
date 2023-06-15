import React from "react";
//import ContentWrapper from "../ContentWrapper/ContentWrapper";
import HomeLayout from "../../../layouts/Home/HomeLayout";
import { NextPage } from "next";
import {useEventsStore} from "../../../lib/store/eventsStore";
import {useNewsStore} from "../../../lib/store/newsStore";
import {useUserStore} from "../../../lib/store/userStore";
import {useMountEffect} from "../../../hooks/useMountEffect";

const ProfilePage: NextPage = () => {
	const [events, fetchEvents] = useEventsStore(state => [state.events, state.fetchEvents]);
	const [news, getNews] = useNewsStore(state => [state.news, state.getNews]);
	const [user] = useUserStore(state => [state.user]);

	useMountEffect(() => {
		fetchEvents();
		getNews();
	});

	return <HomeLayout user={user} news={news} events={events}/>;
};

export default ProfilePage;
