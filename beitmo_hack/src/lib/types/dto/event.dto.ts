export type Event = {
  event_id: number;
  event_name: string;
  description: string;
  time_end: string;
  time_start: string;
}

export type EventsStore = {
  events: Event[] | [];
  event: Event | null;
  isLoading: boolean;
  error: null | string;
  fetchEvents: () => void;
  // eslint-disable-next-line no-unused-vars
  getEvent: (id: number) => void;
}
