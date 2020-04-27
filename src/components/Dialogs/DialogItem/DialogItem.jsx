import React from "react";
import MyPosts from "../../Profile/MyPosts/MyPosts";
import Message from "../Message/Message";

const DialogItem = (props) => {
    //debugger;
    //let mes = props.name.map( n  );
    return <div>
        {props.name}
        {console.log(props.name)}
    </div>
}

export default DialogItem;