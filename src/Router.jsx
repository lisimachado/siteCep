import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home/Home";
import { Resultado } from "./pages/Resultado/Resultado";

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/home', element: <Home /> },
			{ path: '/resultado', element: <Resultado /> },

		],
	},
]);