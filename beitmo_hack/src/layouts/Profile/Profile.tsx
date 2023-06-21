import cls from "./Profile.module.scss";
import classNames from "classnames";
import {User} from "../../lib/types/dto/user.dto";
import {Section} from "../../ui/Section";
import {Text} from "../../ui/Text";
import React from "react";
import {isNull} from "lodash";
import Image from "next/image";
import PastEvents from "../../ui/Event/PastEvents";

interface IProfilePageProps {
	className?: string;
	user: User | null;
}

export const Profile = (props: IProfilePageProps) => {
	const {className, user} = props;

	if (isNull(user)) {
		return null;
	}

	return (
		<div
			className={classNames(cls.ProfilePage, {}, [className])}
		>
			<div className={classNames(cls.ProfilePage_main)}>
				<div className={classNames(cls.ProfilePage_main_info)}>
					<div className={classNames(cls.ProfilePage_main_info_photo)}>
						<Image
							src={"/users/user.png"}
							height={312}
							width={228}
							alt="User"
						/>
					</div>
					<div className={classNames(cls.ProfilePage_main_info_content)}>
						<Text as="h2" className={classNames(cls.ProfilePage_main_info_name)}>
							Королев Юрий Александрович
						</Text>
						<div className={classNames(cls.ProfilePage_main_info_label)}>
							Номер телефона
						</div>
						<div className={classNames(cls.ProfilePage_main_info_data)}>
							+7 (913) 615 09 55
						</div>
						<div className={classNames(cls.ProfilePage_main_info_horizontal)}>
							<div>
								<div className={classNames(cls.ProfilePage_main_info_label)}>
									Дата рождения
								</div>
								<div className={classNames(cls.ProfilePage_main_info_data)}>
									22.02.2000
								</div>
							</div>
							<div>
								<div className={classNames(cls.ProfilePage_main_info_label)}>
								Номер ИСУ
								</div>
								<div className={classNames(cls.ProfilePage_main_info_data)}>
								285861
								</div>
							</div>
							<div>
								<div className={classNames(cls.ProfilePage_main_info_label)}>
								Гражданство
								</div>
								<div className={classNames(cls.ProfilePage_main_info_data)}>
								РФ
								</div>
							</div>
						</div>
						<div className={classNames(cls.ProfilePage_main_info_label)}>
							Ссылка на страницу в VK
						</div>
						<div className={classNames(cls.ProfilePage_main_info_data)}>
							vk.com/icestorm2512
						</div>
					</div>
				</div>
			</div>
			<div className={classNames(cls.ProfilePage_activity)}>
				<Section>
					<Text as='h2'>
						Моя активность
					</Text>
				</Section>
				<div className={classNames(cls.ProfilePage_main_info)}>
					какая-то активность
				</div>
			</div>
			<div className={classNames(cls.ProfilePage_events)}>
				<PastEvents title="Мои мероприятия"/>
			</div>
			<div className={classNames(cls.ProfilePage_filters)}>
				Фильтр
			</div>
		</div>
	);
};
