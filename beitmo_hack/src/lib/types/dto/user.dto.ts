export type User = {
  ban_date: boolean;
  is_russian_citizenship: boolean;
  mail: string;
  notify_id: number;
  phone: string;
  score: number;
  time_select_finish: number;
  user_isu_number: number;
  user_name: string;
  user_patronymic: string;
  user_surname: string;
  vk_link: string;
}

export type UserStore = {
  user: User | null;
  getUser: () => void
  loading: boolean;
}

