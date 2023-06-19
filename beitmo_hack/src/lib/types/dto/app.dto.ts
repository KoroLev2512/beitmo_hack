export type AppState = {
    backendIsAvailable: boolean | null;
    checkBackend: () => void;
    loading: boolean;
    profilePageIsOpen: boolean;
    notificationsVisible: boolean;
    isDarkMode: boolean;
    toggleProfilePage: () => void;
    toggleNotifications: () => void;
    // eslint-disable-next-line no-unused-vars
    toggleDarkMode: (value: boolean) => void;
}
