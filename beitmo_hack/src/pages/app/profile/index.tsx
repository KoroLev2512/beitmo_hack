import React from "react";
import {useUserContext} from "../../../context/UserContext";
import {ProfileEditPopup} from "../../../ui/Popups";
import ProfileLayout from "../../../layouts/Profile/ProfileLayout";
import {PrimaryButton} from "../../../ui/Button";
import Link from "next/link";

const ProfilePage = () => {
    const {user} = useUserContext();

    if (!user) {
        return <>!!</>;
    }

    return (
        <ProfileLayout>
            <Link href="/app/profile/edit">
                <PrimaryButton>
                    редактировать
                </PrimaryButton>
            </Link>
        </ProfileLayout>
    );
};

export default ProfilePage;
