import type { NextPage } from "next";
import Head from "next/head";
import Logotype from "../ui/Logotype/Logotype";
import { Section } from "../ui/Section";
import { Text } from "../ui/Text";

const Login: NextPage = () => {
	return (
		<Section>
			<Head>
				<title>ITMO.Events авторизация</title>
			</Head>
			<Section>
				<Logotype />
			</Section>
			<Text>Авторизуем через ITMO.ID...</Text>
		</Section>
	);
};

export default Login;
