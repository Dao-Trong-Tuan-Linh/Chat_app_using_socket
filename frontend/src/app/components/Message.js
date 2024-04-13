import React from 'react'

export default function Message() {
  return (
    <div
    //   ref={ref}
    //   className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
        //   src={
        //     message.senderId === currentUser.uid
        //       ? currentUser.photoURL
        //       : data.user.photoURL
        //   }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        {/* <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  )
}
