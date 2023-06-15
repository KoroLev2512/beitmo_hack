import classNames from "classnames";
import React, { FC } from "react";
import { Text } from "../Text";
import styles from "./style.module.scss";

type Props = {
  children: string;
  label: string;
} & React.InputHTMLAttributes<{}>;

export const Input: FC<Props> = ({
	children,
	label,
	className,
	...restProps
}) => {
	return (
		<div className={className}>
			<Text as={"p"}>{label}</Text>
			<input
				{...restProps}
				className={classNames(styles.input)}
				value={children}
			/>
		</div>
	);
};
