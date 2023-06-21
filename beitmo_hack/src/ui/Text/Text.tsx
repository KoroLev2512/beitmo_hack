import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

export const Text = <C extends React.ElementType>({
	as,
	children,
	className,
	size,
}: {
  as?: C;
  children: React.ReactNode;
  className?: string;
  size?: "s" | "xs" | "m" | "l" | "xl";
}) => {
	const Component = as || "p";

	return (
		<Component className={classNames(styles.text, {
			[styles.extraLarge]: size === "xl",
			[styles.large]: size === "l",
			[styles.medium]: size === "m",
			[styles.small]: size === "s",
			[styles.extraSmall]: size === "xs",
		}, className)}>
			{children}
		</Component>
	);
};
