import React, {useState} from 'react'
import CreatePost from '../components/modals/CreatePost'
import MailBox from '../components/modals/MailBox'
import DeletePost from '../components/modals/DeletePost'
import '../css/admin.css'

const Admin = () => {
    const [postVisible, setPostVisible] = useState(false)
    const [mailboxVisible, setMailboxVisible] = useState(false)
    const [deletePostVisible, setDeletePostVisible] = useState(false)

    return (
        <main className='admin_main'>
            <button 
                className='create_post'
                onClick={() => setPostVisible(true)}
            >
                Создать пост
            </button>
            <button 
                className='delete_post'
                onClick={() => setDeletePostVisible(true)}
            >
                Удалить пост
            </button>
            <button 
                className='message_store'
                onClick={() => setMailboxVisible(true)}
            >
                Сообщения
            </button>
            <CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>
            <MailBox show={mailboxVisible} onHide={() => setMailboxVisible(false)} />
            <DeletePost show={deletePostVisible} onHide={() => setDeletePostVisible(false)} />
        </main>
    )
  }

export default Admin;