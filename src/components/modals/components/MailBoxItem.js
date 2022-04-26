import React from 'react';
import {Card} from 'react-bootstrap';


const MailBoxItem = ({message}) => {

    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                    <Card.Text>
                        {message.firs_name + ' ' + message.last_name}
                    </Card.Text>
                    <Card.Text>  
                        {message.email}
                    </Card.Text>
                    <Card.Text>
                        {message.telephone}
                    </Card.Text>
                    <Card.Text>        
                        {message.message_info}
                    </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MailBoxItem;