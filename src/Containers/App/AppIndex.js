import './app-index.scss';
import React, { useReducer, useMemo, useState } from 'react';
import notificationsSocket from "../../lib/socket/notifications.socket";
import { handleGetAppSettingsAction } from "../../lib/redux/modules/app/app.actions";
import appReducer, { appDefaultState } from "../../lib/redux/modules/app/app.reducer";
import NotificationsIoContext from "../../hooks/contexts/io/notification.io.ctx";
import RootDispatchContext from "../../hooks/contexts/app/root-dispatch.ctx";
import RootStateContext from "../../hooks/contexts/app/root-state.ctx";
import { useLocation } from "react-router-dom";

import Header from "../../Components/Header/Header.Index";
import ChatIndex from "../Chat/ChatIndex";

function AppIndex(props) {
	const [socket, setSocket] = useState(null);
	const [state, dispatch] = useReducer(appReducer, appDefaultState);
	const location = useLocation();
	const locationState = location.state;


	useMemo(() => {
		setSocket(notificationsSocket(locationState));
		handleGetAppSettingsAction(dispatch);
	}, []);

	return (
		<NotificationsIoContext.Provider value={socket}>
			<RootDispatchContext.Provider value={dispatch}>
				<RootStateContext.Provider value={state}>
					<Header />
					<ChatIndex />
				</RootStateContext.Provider>
			</RootDispatchContext.Provider>
		</NotificationsIoContext.Provider>
	);
}

export default AppIndex;
