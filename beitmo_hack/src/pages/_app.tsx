import React from "react";
import type { AppProps } from "next/app";
import AppWrapper from "../ui/Wrappers/AppWrapper";
import DefaultWrapper from "../ui/Wrappers/DefaultWrapper";
import {AuthGuard} from "../guards/AuthGuard";
import {ServerGuard} from "../guards/ServerGuard";
import "../../styles/globals.scss";


const App = ({ Component, pageProps, router }: AppProps) => {
	if (router.pathname.startsWith("/app/")) {
		return (
			<ServerGuard>
				<AuthGuard>
					<AppWrapper>
						<Component {...pageProps} />
					</AppWrapper>
				</AuthGuard>
			</ServerGuard>
		);
	}
	return (
		<DefaultWrapper>
			<Component {...pageProps} />
		</DefaultWrapper>
	);
};

export default App;
