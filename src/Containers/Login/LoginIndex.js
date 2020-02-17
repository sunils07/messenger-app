import React, { useRef } from "react";
import {
    useHistory,
} from "react-router-dom";

function LoginIndex(props) {
    let history = useHistory();
    const userName = useRef(null);
    const id = useRef(null);


    function onSubmit() {
        const _userName = userName.current.value;
        const _id = id.current.value;
        history.push("/app", {
            userName: _userName,
            id: _id
        });
    }

    return (
        <form>
            <label>UserName</label>
            <br />
            <input ref={userName} type="text" />
            <br />
            <br />
            <label>Id</label>
            <br />
            <input ref={id} type="text" />
            <br />
            <br />
            <button
                type="button"
                onClick={onSubmit}
            >
                Login
                    </button>
        </form>
    );
}

LoginIndex.propTypes = {};

export default LoginIndex;