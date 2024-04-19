import React, { useContext } from 'react'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import { Stack } from 'react-bootstrap'
import avarter from '../../assets/avarter.svg'
import { ChatContext } from '../../context/ChatContext'
import { unreadNotificationsFunc } from '../../utils/unreadNotifications'
import { useFecthLatestMessage } from '../../hooks/useFetchLatesMessage'
import moment from 'moment'
const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);
    const { onlineUsers, notifications, markThisuserNotificationsAsRead } = useContext(ChatContext);
    const { lastestMessage } = useFecthLatestMessage(chat)

    const unreadNotifications = unreadNotificationsFunc(notifications);
    const thisUserNotifications = unreadNotifications?.filter(
        n => n.senderId === recipientUser?._id
    )
    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

    const truncateText = (text) => {
        let shortText = text.substring(0, 20);

        if (text.length > 20) {
            shortText = shortText + "..."
        }
        return shortText
    }
    return (
        <Stack
            direction='horizontal'
            gap={3}
            className='user-card align-items-center p-2 justify-content-between'
            role='button'
            onClick={() => {
                if (thisUserNotifications?.length !== 0) {
                    markThisuserNotificationsAsRead(
                        thisUserNotifications,
                        notifications
                    )
                }
            }}
        >
            <div className='d-flex'>
                <div className='me-2'>
                    <img src={avarter} alt="" height={35} />
                </div>
                <div className='text-content'>
                    <div className='name'>
                        {recipientUser?.name}
                    </div>
                    <div className="text">
                        {
                            lastestMessage?.text && (
                                <span>{truncateText(lastestMessage?.text)}</span>
                            )
                        }
                    </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <div className="date">{moment(lastestMessage?.createAt).calendar()}</div>
                    <div className={thisUserNotifications?.length > 0 ? "this-user-notifications" : ""}>
                        {thisUserNotifications?.length > 0 ? thisUserNotifications?.length : ""}
                    </div>
                    <span className={isOnline ? 'user-online' : ''}></span>
                </div>
            </div>
        </Stack>
    )
}

export default UserChat