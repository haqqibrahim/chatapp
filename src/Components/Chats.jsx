import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/6605654/pexels-photo-6605654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="pic"
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/6605654/pexels-photo-6605654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="pic"
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/6605654/pexels-photo-6605654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="pic"
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
