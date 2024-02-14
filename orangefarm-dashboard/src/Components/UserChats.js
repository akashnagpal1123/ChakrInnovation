import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const users = [
    { name: 'John Doe', avatar: 'user1.png', unreadCount: 1 }, // Replace with actual data
    { name: 'Jane Doe', avatar: 'user2.png', unreadCount: 1 },
    { name: 'Mike Smith', avatar: 'user3.png', unreadCount: 0 },
    { name: 'Alice Johnson', avatar: 'user4.png', unreadCount: 0 },
];

function UserChats() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handlePopupClick = (user) => {
        setSelectedUser(user);
        setShowPopup(true);
    };

    // Calculate the total unread count across all users
    const unreadCount = users.reduce((acc, user) => acc + user.unreadCount, 0);

    const handlePopupClose = () => {
        setSelectedUser(null);
        setShowPopup(false);
    };

    // Replace with your popup content and functionality
    const popupContent = selectedUser ? (
        <div className="popup-content">
            <p>You have {selectedUser.unreadCount} unread messages from {selectedUser.name}</p>
            {/* Show message previews or other details */}
        </div>
    ) : null;

    return (
        <div className="flex flex-col m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-10 py-3">
            <h1 className="text-2xl font-bold mb-4">Chats</h1>
            <div className="unread-messages mb-5">

                <span className="unread-count text-gray-500 text-xs font-semibold">{unreadCount} Unread Messages</span> 
            </div>

            <div className="user-avatars flex">
                {users.map((user) => (
                    <div key={user.name} className=" relative user-avatar " onClick={() => handlePopupClick(user)}>
                        <div className=" rounded-full overflow-hidden w-10 h-10 m-3">
                                <img
                                    src="https://placekitten.com/101/100"
                                   
                                    className=" w-full h-full object-cover"
                                    alt={user.name} />
                                {/* <span><FaRegUserCircle /></span> */}
                            </div>
                        {user.unreadCount > 0 && <span className="absolute w-3 h-3 rounded-xl left-10 border-2 border-white top-2.5 unread-dot font-bold text-sm bg-orange-500 z-10 "></span>}
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="popup" onClick={handlePopupClose}>
                    {popupContent}
                </div>
            )}
        </div>
    );
}

export default UserChats;
