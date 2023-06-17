import React from "react";
import {useUserStore} from "../lib/store/userStore";
import {isNull, isString} from "lodash";
import {useMountEffect} from "../hooks/useMountEffect";
import Loader from "../ui/Loader";
import WorkerPage from "../layouts/Errors/503";
import {LoginPage} from "../pages/app/login";

export const AuthGuard = ({ children }: { children: JSX.Element }) => {

	const [getUser, user, loading, error] = useUserStore(store => [store.getUser, store.user, store.loading, store.error]);
	useMountEffect(() => {
		getUser();
	});

	if (loading) {
		return <Loader/>;
	}

	if (isNull(user)) {
		return <LoginPage/>
	}

	if (!isNull(error) && isString(error)) {
		return <WorkerPage/>;
	}


	if (!isNull(user)) {
		return children;
	}

	return <div></div>;
};
