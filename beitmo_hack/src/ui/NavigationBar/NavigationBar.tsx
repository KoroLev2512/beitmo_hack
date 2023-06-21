import React from "react";
import HomeIcon from "../../lib/icons/home";
import Logotype from "../Logotype/Logotype";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemProps } from "../MenuItem/types";
import styles from "./styles.module.scss";
import ProfileIcon from "../../lib/icons/profile";
import ScheduleIcon from "../../lib/icons/schedule";
import FinanceIcon from "../../lib/icons/finance";

const MenuItems: MenuItemProps[] = [
	{ icon: <HomeIcon />, name: "Главная", href: "/app/home" },
	{ icon: <ProfileIcon />, name: "Профиль", href: "/app/profile", wrap: [
		{ name: "Перс. страница", href: "/app/profile" },
		{ name: "Моя активность", href: "/app/profile/activity" },
		{ name: "Мероприятия", href: "/app/profile/events" },
	]
	},
	{ icon: <ScheduleIcon />, name: "Расписание", href: "/app/profile" },

	{ icon: <FinanceIcon />, name: "Финансы", href: "/app/profile" },
];

const NavigationBar = () => {
	return (
		<div className={styles.container}>
			<Logotype />
			<div className={styles.navigation}>
				<Menu>
					{MenuItems.map((item, index) => (
						<MenuItem {...item} key={index} />
					))}
				</Menu>
			</div>
		</div>
	);
};

export default NavigationBar;
