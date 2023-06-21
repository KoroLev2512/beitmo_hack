import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "../../lib/icons/Logo.svg";
const Logotype = () => {
	return (
		<div className={styles.logo}>
			<Image src={Logo} alt="logo"/>
		</div>
	);
};

export default Logotype;
