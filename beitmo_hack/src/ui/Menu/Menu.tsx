import React from "react";
import { MenuProps } from "./types";
import styles from "./styles.module.scss";

const Menu = ({ children }: MenuProps) => {
	return <ul className={styles.menu}>{children}</ul>;
};

export default Menu;
