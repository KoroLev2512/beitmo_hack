import React from "react";
import ProfileLayout from "../../../layouts/Profile/ProfileLayout";
import {Text} from "../../../ui/Text";
import {Section} from "../../../ui/Section";

const ProfileEventsPage = () => {


	return (
		<ProfileLayout>
			<Section>
				<Text size="l" as="h2">Мероприятия</Text>
			</Section>
		</ProfileLayout>
	);
};

export default ProfileEventsPage;
