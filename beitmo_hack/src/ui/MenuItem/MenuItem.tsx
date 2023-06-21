import React, {useState} from "react";
import { MenuItemProps } from "./types";

import styles from "./styles.module.scss";
import Link from "next/link";
import {isEmpty} from "lodash";
import classNames from "classnames";

const MenuItem = ({ icon, name, href = "#", wrap }: MenuItemProps) => {
	const [isOpen, setIsOpen] = useState(false);
	if (!isEmpty(wrap)) {
		return (
			<div className={classNames(styles.menuItem, {[styles.open]: isOpen})} onClick={() => setIsOpen(state => !state)}>
				<div>
					{icon}
					{name}
				</div>
				{isOpen && (
					wrap?.map(item => (
						<Link href={item.href} key={item.name} >
							<a className={styles.menuItem}>
								{item.name}
							</a>
						</Link>
					))
				)}
			</div>
		);
	}
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
