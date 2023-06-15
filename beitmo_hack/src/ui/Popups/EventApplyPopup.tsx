import React from "react";
import { BasePopup } from "./BasePopup";
import CalendarIcon from "../../lib/icons/CalendarIcon";
import ClockIcon from "../../lib/icons/ClockIcon";
import { MAIN_COLOR } from "../const/colors";
import { Section } from "../Section";
import { Text } from "../Text";
import styles from "./EventApplyPopup.module.scss";
import { PrimaryButton } from "../Button";
import {Event} from "../../lib/types/dto/event.dto";
import {DateTime} from "luxon";

export const EventApplyPopup = ({ event }: {event: Event}) => {
	const dateTimeStart = new Date(event.time_start);// Преобразование строки в объект типа Date
	//const dateTimeEnd = new Date(event.time_end);
	const date_start = dateTimeStart.toLocaleDateString("ru-RU", {day: "numeric", month: "long", year: "numeric"});
	const time_start = dateTimeStart.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	//const date_end = dateTimeStart.toLocaleDateString("ru-RU", {day: "numeric", month: "long", year: "numeric"});
	//const time_end = dateTimeStart.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	const now = DateTime.local().setZone("ru-RU");
	console.log(now);
	return (
		<BasePopup backUrl="/app/home" className={styles.eventPopup}>
			<div className={styles.eventThumb}></div>
			<div className={styles.content}>
				<div className={styles.eventTimeInfo}>
					<Text as={"h3"}>
						<CalendarIcon color={MAIN_COLOR} />
						{date_start}
					</Text>
					<Text as={"h3"}>
						<ClockIcon />{time_start}
					</Text>
				</div>
				<Section margin={16}>
					<Text as={"h1"}>{event.event_name}</Text>
				</Section>
				<Section margin={40}>
					<Text>
						{event.description}
					</Text>
				</Section>
				<div className={styles.actions}>
					<Text as={"h6"} className={styles.estimate}>
            Запись заканчивается за<b>3-5 дней </b>до начала мероприятия
					</Text>
					<div className={styles.buttons}>
						<PrimaryButton>Записаться</PrimaryButton>
					</div>
				</div>
			</div>
		</BasePopup>
	);
};
