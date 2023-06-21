import { Header } from "./Header";
import React from "react";
import { Section } from "../Section";
import { Text } from "../Text";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ArrowIcon from "../../lib/icons/ArrowIcon";
import {useAppStore} from "../../lib/store/appStore";
import {NewsListSidebar} from "../News/NewsListSidebar";

export const ProfileBar = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<BarToggle />
			<ProfileBarContent />
		</div>
	);
};

const BarToggle = () => {
	const [toggleProfilePage, profilePageIsOpen] = useAppStore(state => [state.toggleProfilePage, state.profilePageIsOpen]);

	return (
		<div
			className={classNames(
				styles.toggle,
				profilePageIsOpen && styles.toggleBeforeOpen
			)}
			onClick={toggleProfilePage}
		>
			<ArrowIcon rotation={profilePageIsOpen ? 90 : 270} />
		</div>
	);
};

const ProfileBarContent = (): JSX.Element => {
	// const { profilePageIsOpen } = useUIContext();
	const profilePageIsOpen = useAppStore(state => state.profilePageIsOpen);
	return (
		<div
			className={classNames(styles.bar, profilePageIsOpen && styles.closedBar)}
		>
			<Header />
			<Section margin={16}>
				<Text as={"h3"}>
					Что нового?
				</Text>
			</Section>
			<NewsListSidebar />
			{/*<NotificationsList />*/}
		</div>
	);
};
