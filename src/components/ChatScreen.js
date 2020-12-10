import React from 'react';
import './ChatScreen.css'
import Iframe from 'react-iframe'

function ChatScreen() {
    return(
        <div>
            <Iframe url="https://skribbl.io/?UdznjbPrIMKF"
                width="1000px"
                height="500px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>
        </div>
    )
}

export default ChatScreen