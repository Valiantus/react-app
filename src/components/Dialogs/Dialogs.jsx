import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Greg'},
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Wendy'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Morning!'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'}
    ]

    let dialogsElement = dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/> );
    let messagesElement = messages.map( (m) => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;