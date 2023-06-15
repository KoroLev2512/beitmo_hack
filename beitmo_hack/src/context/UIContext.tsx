import React from "react";
import { createContext } from "./utils/AbstractContext";

type Funcs = { toggleProfilePage: () => void; toggleNotifications: () => void };
type State = {
  profilePageIsOpen: boolean;
  notificationsVisible: boolean;
};

const [UIContext, useContext] = createContext<State, Funcs>();

export const useUIContext = useContext;

export default class UIContextContainer extends React.Component<any, State> {
	funcs: Funcs;
	state: State;

	constructor(props: Readonly<{}>) {
		super(props);
		this.state = {
			profilePageIsOpen: false,
			notificationsVisible: true,
		};
		this.funcs = {
			toggleProfilePage: this.toggleProfilePage,
			toggleNotifications: this.toggleNotifications,
		};
	}

	toggleProfilePage = () => {
		this.setState({ profilePageIsOpen: !this.state.profilePageIsOpen });
	};

	toggleNotifications = () => {
		this.setState({
			notificationsVisible: !this.state.notificationsVisible,
		});
	};

	render(): JSX.Element {
		return (
			<UIContext.Provider value={{ ...this.state, ...this.funcs }}>
				{this.props.children}
			</UIContext.Provider>
		);
	}
}
