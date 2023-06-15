import axios from "../api/axios";
import {EventsStore} from "../types/dto/event.dto";
import {FETCH_EVENTS, GET_EVENT} from "../api/requests/event.requests";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";


export const useEventsStore = create<EventsStore>()(devtools(immer((set) => ({
	events: [],
	event: null,
	isLoading: false,
	error: null,
	fetchEvents: async () => {
		try {
			set({ isLoading: true });
			const response = await axios.get(FETCH_EVENTS); // Replace with your backend API endpoint
			const {data} = await response;
			set({events: data.events, isLoading: false});
		} catch (error) {
			set({ error: error as string });
		}
	},
	getEvent: async (id: number) => {
		try {
			set({ isLoading: true });
			const {data} = await axios.get(GET_EVENT(id));
			set({event: data.events, isLoading: false});
		} catch (error) {
			set({ error: error as string });
		}
	}
}))));
