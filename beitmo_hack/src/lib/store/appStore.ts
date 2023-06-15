import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import axios from "../api/axios";
import {AppState} from "../types/dto/app.dto";

export const useAppStore = create<AppState>()(devtools(immer((set) => ({
	backendIsAvailable: null,
	loading: false,
	profilePageIsOpen: false,
	notificationsVisible: true,
	isDarkMode: false,
	toggleProfilePage: () => {
		set((state) => ({ profilePageIsOpen: !state.profilePageIsOpen}));
	},
	toggleNotifications: () => {
		set((state) => ({ toggleNotifications: !state.toggleNotifications}));
	},
	checkBackend: async () => {
		try {
			set({ loading: true });
			const {data} = await axios.get("events");
			// if (data?.Result) {
			// 	set({backendIsAvailable: Boolean(data.Result === "App live"), loading: false});
			// } else {
			// 	set({backendIsAvailable: false, loading: false});
			// }
			set({ loading: false, backendIsAvailable: true });
		} catch (error) {
			set({ loading: false, backendIsAvailable: false });
		}
	},
	toggleDarkMode: (value: boolean) => {
		set({ isDarkMode: value});
	}
}))));
