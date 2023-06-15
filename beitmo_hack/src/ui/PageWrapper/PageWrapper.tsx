import React from "react";
import styles from "./styles.module.scss";

const PageWrapper = ({ children }: React.PropsWithChildren) => {
	return <div className={styles.page}>{children}</div>;
};

export default PageWrapper;
