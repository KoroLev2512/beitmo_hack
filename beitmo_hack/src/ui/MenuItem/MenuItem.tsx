import React from "react";
import { MenuItemProps } from "./types";

import styles from "./styles.module.scss";
import Link from "next/link";

const MenuItem = ({ icon, name, href = "#" }: MenuItemProps) => {
	return (
		<Link href={href}>
			<a className={styles.menuItem}>
				{icon}
				{name}
			</a>
		</Link>
	);
};

export default MenuItem;
