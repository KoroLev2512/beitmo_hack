import Head from "next/head";
import React, {useEffect} from "react";
import {isNull} from "lodash";
import {useRouter} from "next/router";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import NavigationBar from "../NavigationBar/NavigationBar";
import PageWrapper from "../PageWrapper/PageWrapper";
import { ProfileBar } from "../ProfileBar";
import {useMountEffect} from "../../hooks/useMountEffect";
import parseCookies from "../../utils/parseCookies";
import {useAppStore} from "../../lib/store/appStore";
import { Layout } from "./types";

const AppWrapper = (props: Layout) => {
	const {children} = props;
	const { route} = useRouter();
	const [isDarkMode, toggleDarkMode] = useAppStore(state => [state.isDarkMode, state.toggleDarkMode]);
	// @ts-ignore
	const defaultTheme = parseCookies()?.theme || 'light';

	useMountEffect(() => {
		if (defaultTheme && isNull(isDarkMode)) {
			toggleDarkMode(defaultTheme === "dark");
		} else {
			toggleDarkMode(true);
		}
	});

	useEffect(() => {
		if (isDarkMode === true) {
			document.cookie = "theme=dark;path=/;max-age=31536000";
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.cookie = "theme=light;path=/;max-age=31536000";
			document.documentElement.removeAttribute("data-theme");
		}
	}, [isDarkMode]);

	return (
		<PageWrapper>
			<Head>
				<title>ITMO.Events личный кабинет</title>
			</Head>
			<NavigationBar />
			<ContentWrapper>{children}</ContentWrapper>
			{route === "/app/home" && (
				<ProfileBar />
			)}
		</PageWrapper>
	);
};

export default AppWrapper;
