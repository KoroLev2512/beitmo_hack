import React from "react";
import {useUserStore} from "../lib/store/userStore";
import {isNull, isString} from "lodash";
import {useMountEffect} from "../hooks/useMountEffect";
import Loader from "../ui/Loader";
import WorkerPage from "../layouts/Errors/503";
import { useRouter } from "next/router";



export const AuthGuard = ({ children }: { children: JSX.Element }) => {
	const router = useRouter();
	const [getUser, user, loading, error] = useUserStore(store => [store.getUser, store.user, store.loading, store.error]);
	useMountEffect(() => {
		getUser();
	});

	if (loading) {
		return <Loader/>;
	}

	if (isNull(user) && router.pathname === "/app/login") {
		return children;
	}

	if (!isNull(error) && isString(error)) {
		return <WorkerPage/>;
	}


	if (!isNull(user)) {
		return children;
	}

	return <div></div>;
};
