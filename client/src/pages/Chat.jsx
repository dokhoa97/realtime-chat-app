import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { Container, Stack } from 'react-bootstrap'

const Chat = () => {
    const {
        userChats, isUserChatsLoading, userChatsError
    } = useContext(ChatContext)
    console.log(userChats)
    return (
        <Container>
            {userChats?.length < 1 ? null : (
                <Stack direction='horizontal' gap={4}
                    className='align-items-start'
                >
                    <Stack className='messages-box flex-grow-0' gap={3}>
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {

                        }
                    </Stack>
                    <p>ChatBox</p>
                </Stack>
            )}
        </Container>
    )
}

export default Chat