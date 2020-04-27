import React, {useState,  useEffect} from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

    /*let stateWithSetState = useState(true);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];*/

    let [editMode, SetEditMode] = useState(false);
    let [status, SetStatus] = useState(props.status);

    useEffect( () => {
        SetStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        SetEditMode(true);
    }

    const deactivateEditMode = () => {
        SetEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        SetStatus(e.currentTarget.value);
    }

        return (
            <div>
                { !editMode &&
                    <div>
                        <span onDoubleClick={ activateEditMode }>{props.status || "------"}</span>
                    </div>
                }
                { editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true}  onBlur={ deactivateEditMode }
                               value={status} />
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;