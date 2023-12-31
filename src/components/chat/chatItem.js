import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { chats, addChat } from "../../services/reducers";

function ChatItem(props) {
  const chat = props.chat;

  /** React redux initialization */
  const dispatch = useDispatch();

  return (
    <div
      className={`flex px-4 pt-4 hover:cursor-pointer ${
        useSelector(chats.chat).id === chat.id && "border-s-4 border-green-700"
      }`}
      onClick={() => {
        dispatch(addChat.chat(chat));
      }}
    >
      <img
        src={props.chat.picture}
        alt="profile"
        className="object-cover w-12 h-12 rounded-full min-w-12 max-w-12 max-h-12 min-h-12"
      />
      <div className="flex-1 w-full min-h-full pb-3 border-b ms-2">
        <div className="flex justify-between">
          <p className="text-sm font-semibold capitalize line-clamp-1">
            {chat.name}
          </p>
          <p className="text-sm font-medium line-clamp-1 ms-1">{chat.date}</p>
        </div>
        <p className="text-sm line-clamp-2 text-slate-800">{chat.message}</p>
      </div>
    </div>
  );
}

export default ChatItem;
