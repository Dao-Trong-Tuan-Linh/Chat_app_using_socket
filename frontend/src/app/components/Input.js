import React from 'react'

export default function Input() {
  return (
    <div className="input">
    <input
      type="text"
      placeholder="Nhập tin nhắn..."
    //   onChange={(e) => setText(e.target.value)}
    //   value={text}
    />
    <div className="send">
      <img src={'/attach.png'} alt="" />
      <input
        type="file"
        style={{ display: "none" }}
        id="file"
        // onChange={(e) => setImg(e.target.files[0])}
      />
      <label htmlFor="file">
        <img src={'/img.png'} alt="" />
      </label>
      <button>Gửi</button>
    </div>
  </div>
  )
}
