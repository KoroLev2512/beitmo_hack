import LogoutIcon from "../../lib/icons/LogoutIcon";
import PencilIcon from "../../lib/icons/PencilIcon";
import React from "react";
import { SecondaryButton } from "../Button";
import { Section } from "../Section";
import { Text } from "../Text";
import { UserPic } from "../UserPic";
import styles from "./styles.module.scss";
import Router from "next/router";
import {useUserStore} from "../../lib/store/userStore";

export const Header = () => {
	const user = useUserStore(state => state.user);
	return (
		<div className={styles.header}>
			<Section className={styles.wrapper}>
				<UserPic url="/thumbnail/user.jpg" height={54} width={54} />
				<div className={styles.userInfo}>
					<Text as="h3" className={styles.reviewOwner}>
						{user?.user_name} {user?.user_surname}
					</Text>
					<Text>{user?.user_isu_number}</Text>
				</div>
			</Section>
			<div className={styles.actions}>
				<SecondaryButton onClick={() => Router.push("/app/profile/edit")}>
					<PencilIcon /> Изменить
				</SecondaryButton>
				<SecondaryButton onClick={() => Router.push("/")}>
					<LogoutIcon /> Выйти
				</SecondaryButton>
			</div>
		</div>
	);
};
