import Head from "next/head";
import React, {useEffect} from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import NavigationBar from "../NavigationBar/NavigationBar";
import PageWrapper from "../PageWrapper/PageWrapper";
import { ProfileBar } from "../ProfileBar";
import { Layout } from "./types";
import {useRouter} from "next/router";
import {useAppStore} from "../../lib/store/appStore";
import {useMountEffect} from "../../hooks/useMountEffect";

const AppWrapper = ({ children }: Layout) => {
	const { route} = useRouter();
	const [isDarkMode, toggleDarkMode] = useAppStore(state => [state.isDarkMode, state.toggleDarkMode]);
	const defaultTheme = localStorage.getItem("theme");
	useMountEffect(() => {
		if (defaultTheme && isDarkMode === false) {
			toggleDarkMode(defaultTheme === "dark");
		}
	});

	useEffect(() => {
		if (isDarkMode) {
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
			{route === "/app/home" && (
				<ProfileBar />
			)}
		</PageWrapper>
	);
};

export default AppWrapper;
