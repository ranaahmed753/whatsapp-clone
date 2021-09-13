import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';

const Chat = () => {
    const [input,setInput] = useState([]);
    const sendMessage = (e) => {
        e.preventdefault();
        console.log('you type a message>>>');
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src='https://www.mediabistro.com/wp-content/uploads/2016/06/successful-freelancer-repeat-work_opt.jpg'/>
                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className='chat__message'>hey guyshbdfvhdh</p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticonOutlinedIcon/>
                <form>
                    <input 
                       value={input}
                       onChange={(e) => setInput(e.target.value)} 
                       type='text' 
                        placeholder='type a message'
                    />
                    <button type='submit' onClick={sendMessage}>Send a message</button>
                </form>
                <MicOutlinedIcon/>
            </div>
            
        </div>
    );
};

export default Chat;