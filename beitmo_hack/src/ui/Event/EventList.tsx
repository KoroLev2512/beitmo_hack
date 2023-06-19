import React, {useMemo, useState} from "react";
import { EventCard } from "./EventCard";
import { Section } from "../Section";
import { Text } from "../Text";
import ArrowIcon from "../../lib/icons/ArrowIcon";
import styles from "./styles.module.scss";
import {Event} from "../../lib/types/dto/event.dto";
import {useAppStore} from "../../lib/store/appStore";
import {isEmpty, isNull} from "lodash";

interface IProps {
	events: Event[];
}

export const EventList = (props: IProps) => {
	const { events } = props;
	const isDarkMode = useAppStore(state => state.isDarkMode);
	const [active, setActive] = useState(0);

	const slides = useMemo(
		() =>
			!isEmpty(events) ? events.map((item, index) => (
				<EventCard
					style={{transform: `translateX(-${active * 240}px)`, transition: "all 1s"}}
					key={index}
					event={item}
				/>
			)) : null,
		[active, events]
	);

	if (isEmpty(events) || isNull(slides)) {
		return (
			<div>
				<Text as="h2">Мероприятия отсутствуют</Text>
			</div>
		);
	}

	return (
		<div>
			<Text as="h2">Мероприятия</Text>
			<div className={styles.slider}>
				<span className={styles.arrowPrev} onClick={() => setActive((item) => item === 0 ? slides.length - 1 : item - 1)}>
					<ArrowIcon rotation={-90} color={isDarkMode ? "#c0c0c0" : "#000"}/>
				</span>
				<Section margin={10} className={styles.list}>
					{slides}
				</Section>
				<span className={styles.arrowNext} onClick={() => setActive((item) => item === slides.length - 1 ? 0 : item + 1)}>
					<ArrowIcon rotation={90} color={isDarkMode ? "#c0c0c0" : "#000"}/>
				</span>
			</div>
		</div>
	);
};
