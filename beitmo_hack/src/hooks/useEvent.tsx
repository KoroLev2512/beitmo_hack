import { GET_EVENT } from "../lib/api/requests/event.requests";

import useSWR from "swr";

const fetcher = (apiURL: string) => fetch(apiURL).then((res) => res.json());

export const useEvent = (id: number) => {
	const { data, error } = useSWR(GET_EVENT(id), fetcher);

	console.log(data, error);

	return { data, error };
};

