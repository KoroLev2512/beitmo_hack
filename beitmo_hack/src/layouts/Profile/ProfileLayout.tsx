import React from "react";
import {LayoutType} from "../../ui/types";
import classNames from "classnames";
import cls from "./ProfileLayout.module.scss";
import {Text} from "../../ui/Text";
import SearchIcon from "../../lib/icons/search";
import BellIcon from "../../lib/icons/BellIcon";
import {UserPic} from "../../ui/UserPic";
import RussiaIcon from "../../lib/icons/russia";
import ArrowIcon from "../../lib/icons/ArrowIcon";

const ProfileLayout = (props: LayoutType) => {
	const { children } = props;
	return (
		<div>
			<div className={classNames(cls.ProfileLayout)}>
				<div className={classNames(cls.ProfileLayout_main)}>
					<Text size="xl" as="h1">
						Профиль
					</Text>
					<SearchIcon />
				</div>
				<div className={classNames(cls.ProfileLayout_date)}>
					Чт, 10 сентября
				</div>
				<div className={classNames(cls.ProfileLayout_notification)}>
					<BellIcon width={24} height={24}/>
				</div>
				<div className={classNames(cls.ProfileLayout_profile)}>
					<div>
						<UserPic url="/thumbnail/user.jpg" height={53} width={53} />
					</div>
					<div>
						<Text as="h3" size="s">Киселёва П.С.</Text>
						<Text as="p" size="s" className={classNames(cls.ProfileLayout_profile_isu)}>284258</Text>
					</div>
					<div>
						<ArrowIcon  rotation={180}/>
					</div>
				</div>
				<div className={classNames(cls.ProfileLayout_language)}>
					<RussiaIcon />
				</div>
			</div>
			{children}
		</div>
	);
};

export default ProfileLayout;
