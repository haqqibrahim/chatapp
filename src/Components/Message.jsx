import React from "react"

const Message = () => {
    return(
        <div className="message">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src="https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
        </div>
    )
}

export default Message