import axios from "../api/axios";
import {UserStore} from "../types/dto/user.dto";
import {GET_USER} from "../api/requests/user.requests";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";


export const useUserStore = create<UserStore>()(devtools(immer((set) => ({
	user: null,
	loading: false,
	getUser: async () => {
		try {
			set({ loading: true });
			const userId = localStorage.getItem("userId") || 1000;

			if (!userId) {
				return;
			}
			const response = await axios.get(GET_USER(userId as number));
			const {data} = await response;
			set({user: data.user, loading: false});
		} catch (error) {
			set({ loading: false, user: null });
		}
	},
}))));
