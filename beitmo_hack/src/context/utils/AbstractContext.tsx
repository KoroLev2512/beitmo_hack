import React from "react";

type CreateContextType<State, Funcs> = [
  React.Context<(State & Funcs) | any>,
  () => State & Funcs
];

export const createContext = <State, Funcs>(): CreateContextType<
  State,
  Funcs
> => {
	const Ctx = React.createContext<(State & Funcs) | any>(null);
	return [Ctx, () => React.useContext<State & Funcs>(Ctx)];
};
