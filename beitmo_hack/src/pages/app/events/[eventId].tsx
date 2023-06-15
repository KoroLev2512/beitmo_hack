import React from "react";
import {useRouter} from "next/router";
import {isEmpty, isNull} from "lodash";
import {useEventsStore} from "../../../lib/store/eventsStore";
import {useUserStore} from "../../../lib/store/userStore";
import {useNewsStore} from "../../../lib/store/newsStore";
import HomeLayout from "../../../layouts/Home/HomeLayout";
import { EventApplyPopup } from "../../../ui/Popups";
import {useMountEffect} from "../../../hooks/useMountEffect";

const EventPopup = () => {
	const router = useRouter();
	const {eventId} = router.query;
	const [fetchEvents, getEvent, event, events, isLoading, error] = useEventsStore(state => [state.fetchEvents, state.getEvent, state.event, state.events, state.isLoading, state.error]);
	const [user] = useUserStore(state => [state.user]);
	const [news, getNews] = useNewsStore(state =>[state.news, state.getNews]);

	useMountEffect(() => {
		if (isEmpty(events)) {
			fetchEvents();
		}
		if (isEmpty(news) || isNull(news)) {
			getNews();
		}
		getEvent(Number(eventId));
	});
	if (isLoading) {
		return <HomeLayout user={user} news={news} events={events} />;
	}

	if (!isNull(error) || isNull(event)) {
		return <div>Произошла ошибка</div>;
	}

	return (
		<>
			<HomeLayout user={user} news={news} events={events} />
			<EventApplyPopup event={event}/>
		</>
	);
};

export default EventPopup;
