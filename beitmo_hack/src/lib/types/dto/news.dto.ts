import {User} from "./user.dto";

export type News = {
    _id: string;
    name: string;
    text: string;
    user: User;
    createdAt: string;
    likes: number;
}

export type NewsStore = {
    news: [] | null | News[];
    getNews: () => void;
}
