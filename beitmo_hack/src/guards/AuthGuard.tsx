import React from "react";
import {useUserStore} from "../lib/store/userStore";
import {isNull} from "lodash";
import {useMountEffect} from "../hooks/useMountEffect";
import Loader from "../ui/Loader";

export const AuthGuard = ({ children }: { children: JSX.Element }) => {

	const [getUser, user, loading] = useUserStore(store => [store.getUser, store.user, store.loading]);
	useMountEffect(() => {
		getUser();
	});

	if (loading) {
		return <Loader/>;
	}

	if (!isNull(user)) {
		return children;
	}

	return <div></div>;
};
