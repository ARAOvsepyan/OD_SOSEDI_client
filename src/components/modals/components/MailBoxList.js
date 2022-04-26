import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import MailBoxItem from "./MailBoxItem";

const MailBoxList = observer(() => {
    const {message} = useContext(Context)

    return (
        <div class="container_message">
            {message.message.map(message =>
                <MailBoxItem key={message.id} message={message}/>
            )}
        </div>
    );
});

export default MailBoxList;