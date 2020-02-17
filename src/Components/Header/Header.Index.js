import "./header.style.scss";
import React, { useContext } from "react";
import RootDispatchContext from "../../hooks/contexts/app/root-dispatch.ctx";
import RootStateContext from "../../hooks/contexts/app/root-state.ctx";
import { handleAppThemeAction } from "../../lib/redux/modules/app/app.actions";


function Header(props) {
    const appRootDispatch = useContext(RootDispatchContext);
    const appStateContext = useContext(RootStateContext);
    
    function handleChange(e) {
        const {checked} = e.target;

        handleAppThemeAction(appRootDispatch, {
            ...appStateContext.theme,
            headerBlackBGColor: checked ? "black" : "red",
            isDarkMode: checked
        });
    }

    return (
        <header className="header">
            <a>Hello Socket</a>
            {/* <label>DarkTheme</label>
            <input
                onChange={handleChange}
                type="checkbox" 
                name="theme" /> */}
        </header>
    );
}

Header.propTypes = {};

export default Header;