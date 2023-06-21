import cls from "./ProfileActivity.module.scss";
import classNames from "classnames";
import {Text} from "../../../ui/Text";
import {Section} from "../../../ui/Section";
import PastEvents from "../../../ui/Event/PastEvents";
import React from "react";


interface IProfileActivityProps {
    className?: string;
}

export const ProfileActivity = (props: IProfileActivityProps) => {
	const { className } = props;
	return (
		<div
			className={classNames(cls.ProfileActivity, {}, [className])}
		>
			<Section>
				<Text size="l" as="h2">Моя активность</Text>
			</Section>
			<Section className={classNames(cls.ProfileActivity_activities)}>
				<div className={classNames(cls.ProfileActivity_activities_card)}>
					<Text size="m" as="h3">
						Уровень активности
					</Text>

				</div>
				<div className={classNames(cls.ProfileActivity_activities_card)}>
					<Text size="m" as="h3">
						Участие в мероприятиях <br/>(по месяцам)
					</Text>
				</div>
				<div className={classNames(cls.ProfileActivity_activities_card)}>
					<Text size="m" as="h3">
						Направления мероприятий <br/>(за последний год)
					</Text>
				</div>
			</Section>
			<Section><Text size="l" as="h2">Мои мероприятия</Text></Section>
			<Section>
				<div>
					Поиск
				</div>
				<div>
					<PastEvents />
				</div>
			</Section>
		</div>
	);
};
