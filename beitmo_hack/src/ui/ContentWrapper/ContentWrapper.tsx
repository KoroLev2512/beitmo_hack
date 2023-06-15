import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import {useAppStore} from "../../lib/store/appStore";

const ContentWrapper = ({ children }: React.PropsWithChildren) => {
	const profilePageIsOpen = useAppStore(state => state.profilePageIsOpen);
	return (
		<div
			className={classNames(
				styles.outerWrapper,
				!profilePageIsOpen && styles.centerWrapper
			)}
		>
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
};

export default ContentWrapper;
