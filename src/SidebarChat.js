import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

const SidebarChat = ({addNewChat}) => {
    return (
        <div className='sidebarChat'>
            <Avatar src='http://nie-images.s3.amazonaws.com/gall_content/2017/5/2017_5$largeimg16_May_2017_131230167.jpg'/>
            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;