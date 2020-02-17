import './app-index.scss';
import React, { useReducer, useMemo } from 'react';
import notificationsSocket from "../../lib/socket/notifications.socket";
import { handleGetAppSettingsAction } from "../../lib/redux/modules/app/app.actions";
import appReducer, { appDefaultState } from "../../lib/redux/modules/app/app.reducer";
import NotificationsIoContext from "../../hooks/contexts/io/notification.io.ctx";
import RootDispatchContext from "../../hooks/contexts/app/root-dispatch.ctx";
import RootStateContext from "../../hooks/contexts/app/root-state.ctx";

import Header from "../../Components/Header/Header.Index";
import ChatIndex from "../Chat/ChatIndex";

const _notificationsSocket = notificationsSocket();

function AppIndex(props) {
	const [state, dispatch] = useReducer(appReducer, appDefaultState);

	useMemo(() => {
		handleGetAppSettingsAction(dispatch);
	}, []);

	return (
		<NotificationsIoContext.Provider value={_notificationsSocket}>
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
