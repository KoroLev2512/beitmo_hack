import React from "react";
import {Text} from "../Text";
import {RequestsItem} from "./RequestsItem";
import styles from "./styles.module.scss";

const testData = [
	{
		img: {
			name: "test",
			src: "/events/thumbnails/selo.jpg",
			alt: "test"
		},
		name: "Экскурсия по Царскому селу",
		date: 1681821271619,
		time: 10800000,
		status: "new"
	},
	{
		img: {
			name: "test",
			src: "/events/thumbnails/selo.jpg",
			alt: "test"
		},
		name: "Экскурсия по Царскому селу",
		date: 1681821271619,
		time: 10800000,
		status: "accepted"
	},
	{
		img: {
			name: "test",
			src: "/events/thumbnails/selo.jpg",
			alt: "test"
		},
		name: "Экскурсия по Царскому селу",
		date: 1681821271619,
		time: 10800000,
		status: "canceled"
	}
];

const EventRequests = () => {

	return (
		<div className={styles.requestsWrapper}>
			<div className={styles.requestsCard}>
				<Text as="h2" className={styles.requestsItemTitle}>
                    Ваши заявки
				</Text>
				<div className={styles.requestsList}>
					{testData.map((item) => (
						<RequestsItem key={`${item.name}+${item.date}`} data={item}/>
					))}
				</div>
			</div>
			<div className={styles.requestsCard}>
				<Text as="h2" className={styles.requestsItemTitle}>
                    Одобренные заявки
				</Text>
				<div className={styles.requestsList}>
					{testData.map((item) => (
						<RequestsItem key={`${item.name}+${item.date}`} data={item}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventRequests;
