import React from "react";
import {Text} from "../Text";
import styles from "./styles.module.scss";
import PastEventItem from "./PastEventItem";

interface IProps {
    title?: string;
}

const PastEvents = (props: IProps) => {
	const { title = "Прошедшие мероприятия" } = props;
	return (
		<div className={styles.pastEventsSection}>
			<Text as="h2">
				{title}
			</Text>
			<div className={styles.pastEventsList}>
				<PastEventItem/>
				<PastEventItem/>
				<PastEventItem/>
				<PastEventItem/>
			</div>
		</div>
	);
};

export default PastEvents;
