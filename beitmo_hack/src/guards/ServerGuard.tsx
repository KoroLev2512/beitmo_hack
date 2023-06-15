import React from "react";
import WorkerPage from "../layouts/Errors/503";
import {useAppStore} from "../lib/store/appStore";
import {useMountEffect} from "../hooks/useMountEffect";
import Loader from "../ui/Loader";

export const ServerGuard = ({ children }: { children: JSX.Element }) => {
	// const { backendIsAvailable } = useServerContext();
	const [backendIsAvailable, checkBackend, loading] = useAppStore(state => [state.backendIsAvailable, state.checkBackend, state.loading]);
	useMountEffect(() => {checkBackend();});

	if (loading) {
		return <Loader/>;
	}

	if (backendIsAvailable) {
		return children;
	}

	if (backendIsAvailable === false) {
		return <WorkerPage/>;
	}

	return <Loader/>;
};
