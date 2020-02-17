import React, { createContext, useRef, useContext, useReducer } from "react";
import RootDispatchContext from "../../hooks/contexts/app/root-dispatch.ctx";
import NotificationsIoContext from "../../hooks/contexts/io/notification.io.ctx";
import { mathOperation } from "../../lib/redux/modules/math/math.actions";
import { handleAppThemeAction } from "../../lib/redux/modules/app/app.actions";
import mathReducer, { mathDefaultState } from "../../lib/redux/modules/math/math.reducer";

const StateContext = createContext();
const DispatchContext = createContext();

function ChatIndex(props) {
    const messageInput = useRef(null);
    const notificationSocket = useContext(NotificationsIoContext);
    const [state, dispatch] = useReducer(mathReducer, mathDefaultState);

    function onSubmit() {
        const messageText = messageInput.current.value;
        notificationSocket.emitMessage({
            message: messageText
        });
    }

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <form>
                    <label>Message</label>
                    <br />
                    <br />
                    <input ref={messageInput} type="text" />
                    <br />
                    <br />
                    <button
                        type="button"
                        onClick={onSubmit}
                    >
                        Send
                    </button>
                </form>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

ChatIndex.propTypes = {};

export default ChatIndex;