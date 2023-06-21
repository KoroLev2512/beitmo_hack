import axios from "../api/axios";
import {User, UserStore} from "../types/dto/user.dto";
import {GET_USER, LOGIN} from "../api/requests/user.requests";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import Router from "next/router";


export const useUserStore = create<UserStore>()(devtools(immer((set) => ({
	user: null,
	loading: false,
	error: null,
	getUser: async () => {
		try {
			set({ loading: true });
			const response = await axios.get(GET_USER);
			const {data} = await response;
			set({user: data, loading: false});
		} catch (error) {
			await Router.push("/app/login");
			set({ loading: false, user: null, error: `${error}` });
		}
	},
	login: async (params) => {
		try {
			set({ loading: true, error: null });
			const { user }: { user: User } = await axios.post(LOGIN, params);
			set({loading: false, user});
			await Router.push("/app/home");
		} catch (error) {
			set({loading: false, error: `${error}`});
		}
	}
}))));
