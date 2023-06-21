import Head from "next/head";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import NavigationBar from "../NavigationBar/NavigationBar";
import PageWrapper from "../PageWrapper/PageWrapper";
import {useMountEffect} from "../../hooks/useMountEffect";
import {useAppStore} from "../../lib/store/appStore";
import {parseCookies} from "nookies";
import { Layout } from "./types";

const AppWrapper = (props: Layout) => {
	const {children} = props;
	const [isDarkMode, toggleDarkMode] = useAppStore(state => [state.isDarkMode, state.toggleDarkMode]);
	const defaultTheme = parseCookies().theme || "light";

	useMountEffect(() => {
		if (defaultTheme) {
			toggleDarkMode(defaultTheme === "dark");
		} else {
			toggleDarkMode(false);
		}
	});

	useEffect(() => {
		if (isDarkMode === true) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
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
		</PageWrapper>
	);
};

export default AppWrapper;
