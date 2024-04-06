import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext';

const PotentialChats = () => {
    const { user } = useContext(AuthContext)
    const { potentialChats, createChat } = useContext(ChatContext);

    return (

        <div className="all-users">
            {potentialChats &&
                potentialChats?.map((u, index) => (
                    <div className="single-user" key={index}
                        onClick={() => createChat(u._id, user._id)}
                    >
                        {u.name}
                        <span className="user-online"></span>
                    </div>
                ))}
        </div>

    )
}

export default PotentialChats