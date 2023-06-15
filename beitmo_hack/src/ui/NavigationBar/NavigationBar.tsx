import React from "react";
import HomeIcon from "../../lib/icons/HomeIcon";
import TicketIcon from "../../lib/icons/TicketIcon";
import WarningIcon from "../../lib/icons/WarningIcon";
import Logotype from "../Logotype/Logotype";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemProps } from "../MenuItem/types";
import styles from "./styles.module.scss";

const MenuItems: MenuItemProps[] = [
	{ icon: <HomeIcon />, name: "Главная", href: "/app/home" },
	{ icon: <TicketIcon />, name: "Мои мероприятия", href: "/app/events" },
	{ icon: <WarningIcon />, name: "Правила", href: "/app/rules" },
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
